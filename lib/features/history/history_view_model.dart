import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class HistoryViewModel extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  List<Map<String, dynamic>> get history => _storageService.history;
  int get currentStreak => _storageService.currentStreak;
  int get longestStreak => _storageService.longestStreak;
}
