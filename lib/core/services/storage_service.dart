import 'dart:convert';
import 'package:hive_flutter/hive_flutter.dart';

class StorageService {
  final Box<String> _dataBox = Hive.box<String>('app_data');
  final Box<String> _settingsBox = Hive.box<String>('settings');

  // --- Goal ---
  String? get goal => _dataBox.get('goal');
  Future<void> setGoal(String newGoal) => _dataBox.put('goal', newGoal);
  Future<void> clearGoal() => _dataBox.delete('goal');

  // --- Theme Mode ---
  String get themeMode => _settingsBox.get('theme_mode') ?? 'system';
  Future<void> setThemeMode(String mode) =>
      _settingsBox.put('theme_mode', mode);

  // --- Streak ---
  int get currentStreak =>
      int.tryParse(_dataBox.get('current_streak') ?? '0') ?? 0;
  Future<void> setCurrentStreak(int streak) =>
      _dataBox.put('current_streak', streak.toString());

  int get longestStreak =>
      int.tryParse(_dataBox.get('longest_streak') ?? '0') ?? 0;
  Future<void> setLongestStreak(int streak) =>
      _dataBox.put('longest_streak', streak.toString());

  // --- History ---
  // List of { "date": "YYYY-MM-DD", "success": true/false }
  List<Map<String, dynamic>> get history {
    final str = _dataBox.get('history');
    if (str == null) return [];
    try {
      final List<dynamic> decoded = jsonDecode(str);
      return decoded.map((e) => Map<String, dynamic>.from(e)).toList();
    } catch (_) {
      return [];
    }
  }

  Future<void> addHistoryEntry(String date, bool success) async {
    final curHistory = history;
    // Check if we already have an entry for today, if so replace it or ignore it.
    // The UX says daily yes/no. Usually you can only answer once per day.
    final index = curHistory.indexWhere((e) => e['date'] == date);
    if (index >= 0) {
      curHistory[index]['success'] = success;
    } else {
      curHistory.add({'date': date, 'success': success});
    }
    // Sort by date descending
    curHistory.sort(
      (a, b) => (b['date'] as String).compareTo(a['date'] as String),
    );
    await _dataBox.put('history', jsonEncode(curHistory));
  }

  // Last action date string (YYYY-MM-DD)
  String? get lastActionDate => _dataBox.get('last_action_date');
  Future<void> setLastActionDate(String date) =>
      _dataBox.put('last_action_date', date);

  // --- Reset All Data ---
  Future<void> clearAllData() async {
    await _dataBox.clear();
  }
}
