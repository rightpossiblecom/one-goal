import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class SettingsViewModel extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  ThemeMode get themeMode {
    final modeStr = _storageService.themeMode;
    if (modeStr == 'dark') return ThemeMode.dark;
    if (modeStr == 'light') return ThemeMode.light;
    return ThemeMode.system;
  }

  Future<void> setThemeMode(ThemeMode mode) async {
    String modeStr = 'system';
    if (mode == ThemeMode.dark) modeStr = 'dark';
    if (mode == ThemeMode.light) modeStr = 'light';

    await _storageService.setThemeMode(modeStr);
    notifyListeners();
  }

  Future<void> clearAppData() async {
    await _storageService.clearAllData();
    notifyListeners();
  }
}
