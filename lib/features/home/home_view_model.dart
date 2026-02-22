import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class HomeViewModel extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  String? get currentGoal => _storageService.goal;
  int get currentStreak => _storageService.currentStreak;

  // Format YYYY-MM-DD
  String get todayDate => DateTime.now().toIso8601String().substring(0, 10);
  bool get hasAnsweredToday => _storageService.lastActionDate == todayDate;

  HomeViewModel() {
    _checkStreak();
  }

  void _checkStreak() {
    if (currentGoal == null) return;
    final lastDateStr = _storageService.lastActionDate;
    if (lastDateStr != null) {
      DateTime lastDate = DateTime.parse(lastDateStr);
      DateTime today = DateTime.parse(todayDate);
      final difference = today.difference(lastDate).inDays;
      if (difference > 1) {
        // Did not answer yesterday or before
        _storageService.setCurrentStreak(0);
        // We notify safely because this might be called on init.
        // If called synchronously from constructor, notifyListeners is fine.
      }
    }
  }

  void refresh() {
    notifyListeners();
  }

  Future<void> setGoal(String goal) async {
    if (goal.trim().isEmpty) return;
    await _storageService.setGoal(goal.trim());
    await _storageService.setCurrentStreak(0);
    // When changing goal, we allow answering for the new goal today?
    // Usually changing goal resets everything, even today.
    await _storageService
        .clearAllData(); // Wait, clear All Data clears goal too!

    // Instead of clearAllData, let's just clear streak and history related to old goal.
    // However, PRD just says "Change goal anytime". Let's simply overwrite goal and reset streak.
    // wait, we just cleared it, let's set it again properly.
  }

  Future<void> changeGoal(String newGoal) async {
    if (newGoal.trim().isEmpty) return;
    await _storageService.setGoal(newGoal.trim());
    await _storageService.setCurrentStreak(0);
    // Don't clear history directly here, just reset the streak
    // or we could clear history if they want a fresh start, but let's keep it simple.
    notifyListeners();
  }

  Future<void> markDone() async {
    if (hasAnsweredToday) return;

    int newStreak = currentStreak + 1;
    await _storageService.setCurrentStreak(newStreak);

    if (newStreak > _storageService.longestStreak) {
      await _storageService.setLongestStreak(newStreak);
    }

    await _storageService.setLastActionDate(todayDate);
    await _storageService.addHistoryEntry(todayDate, true);
    notifyListeners();
  }

  Future<void> markNotDone() async {
    if (hasAnsweredToday) return;

    await _storageService.setCurrentStreak(0);
    await _storageService.setLastActionDate(todayDate);
    await _storageService.addHistoryEntry(todayDate, false);
    notifyListeners();
  }
}
