import 'package:flutter/material.dart';

class AppTheme {
  // Colors
  static const Color primaryBg = Color(0x22550aff);
  static const Color cardDark = Color(0xFF0A0A0A);
  static const Color cardLight = Color(0xFFFAFAFA);
  static const Color accentPurple = Color(0xFF605CA9);
  static const Color darkBg = Color(0xFF0A0A14);
  static const Color darkGradient = Color(0xFF1A1A2E);

  // Text Colors
  static Color textPrimary = Colors.black;
  static Color textSecondary = Colors.black.withOpacity(0.6);
  static Color textTertiary = Colors.black.withOpacity(0.4);
  static Color textLight = Colors.white.withOpacity(0.95);
  static Color textLightSecondary = Colors.white.withOpacity(0.6);
  static Color textLightTertiary = Colors.white.withOpacity(0.4);

  // Typography
  static const String fontFamily = 'SF Pro Text';

  // Heading Sizes
  static const double headingLarge = 64.0;
  static const double headingMedium = 48.0;
  static const double headingSmall = 42.0;
  static const double headingXSmall = 36.0;

  // Body Sizes
  static const double bodyLarge = 28.0;
  static const double bodyMedium = 22.0;
  static const double bodySmall = 16.0;
  static const double bodyXSmall = 15.0;

  // Label Sizes
  static const double labelMedium = 12.0;
  static const double labelSmall = 11.0;
  static const double labelXSmall = 10.0;

  // Spacing
  static const double spacingXSmall = 8.0;
  static const double spacingSmall = 12.0;
  static const double spacingMedium = 16.0;
  static const double spacingLarge = 24.0;
  static const double spacingXLarge = 40.0;
  static const double spacingXXLarge = 60.0;
  static const double spacingXXXLarge = 80.0;

  // Padding presets
  static const EdgeInsets paddingMobile = EdgeInsets.fromLTRB(24, 60, 24, 40);
  static const EdgeInsets paddingTablet = EdgeInsets.fromLTRB(40, 60, 40, 40);
  static const EdgeInsets paddingDesktop = EdgeInsets.fromLTRB(80, 80, 80, 60);

  // Border Radius
  static const double radiusSmall = 2.0;

  // Text Styles
  static TextStyle archiveLabel(Color color) => TextStyle(
    fontSize: labelSmall,
    fontWeight: FontWeight.w500,
    letterSpacing: 2.0,
    color: color,
  );

  static TextStyle heading(double size, Color color) => TextStyle(
    fontSize: size,
    fontWeight: FontWeight.w300,
    height: 1.1,
    letterSpacing: size > 50 ? -2.0 : -1.5,
    color: color,
  );

  static TextStyle postTitle(double size, Color color) => TextStyle(
    fontSize: size,
    fontWeight: FontWeight.w400,
    height: 1.2,
    letterSpacing: -0.5,
    color: color,
  );

  static TextStyle postMeta(Color color) => TextStyle(
    fontSize: labelXSmall,
    fontWeight: FontWeight.w500,
    letterSpacing: 1.5,
    color: color,
  );

  static TextStyle body(Color color) => TextStyle(
    fontSize: bodyXSmall,
    fontWeight: FontWeight.w400,
    height: 1.5,
    color: color,
  );

  static TextStyle buttonText = const TextStyle(
    fontSize: labelSmall,
    fontWeight: FontWeight.w500,
    letterSpacing: 1.5,
    color: Colors.white,
  );
}