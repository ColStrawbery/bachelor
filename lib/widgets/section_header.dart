import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class SectionHeader extends StatelessWidget {
  final String label;
  final String title;
  final Widget? action;
  final EdgeInsets? padding;

  const SectionHeader({
    Key? key,
    required this.label,
    required this.title,
    this.action,
    this.padding,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding ?? AppTheme.paddingMobile,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label.toUpperCase(),
            style: AppTheme.archiveLabel(AppTheme.textTertiary),
          ),
          SizedBox(height: AppTheme.spacingXSmall),
          Text(
            title,
            style: AppTheme.heading(AppTheme.headingSmall, AppTheme.textPrimary),
          ),
          if (action != null) ...[
            SizedBox(height: AppTheme.spacingLarge),
            action!,
          ],
        ],
      ),
    );
  }
}