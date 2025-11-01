
import 'package:flutter/material.dart';
import '../../components/featured_post.dart';
import '../../components/post_card.dart';
import '../../data/posts_data.dart';
import '../../data/post_model.dart';
import '../post_detail_screen.dart';

import 'package:flutter/material.dart';
import '../../components/featured_post.dart';
import '../../components/post_card.dart';
import '../../data/posts_data.dart';
import '../../data/post_model.dart';
import '../post_detail_screen.dart';
import '../../theme/app_theme.dart';

class BlogHomeMobile extends StatefulWidget {
  const BlogHomeMobile({Key? key}) : super(key: key);

  @override
  State<BlogHomeMobile> createState() => _BlogHomeMobileState();
}

class _BlogHomeMobileState extends State<BlogHomeMobile> {
  final ScrollController _scrollController = ScrollController();
  double _scrollOffset = 0;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(() {
      setState(() {
        _scrollOffset = _scrollController.offset;
      });
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        controller: _scrollController,
        physics: const BouncingScrollPhysics(),
        slivers: [
          _buildHeader(),
          _buildFeaturedPost(),
          _buildPostGrid(),
        ],
      ),
    );
  }

  Widget _buildHeader() {
    final opacity = (1 - (_scrollOffset / 100)).clamp(0.0, 1.0);

    return SliverToBoxAdapter(
      child: Opacity(
        opacity: opacity,
        child: Padding(
          padding: AppTheme.paddingMobile,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'ARCHIVE',
                style: AppTheme.archiveLabel(AppTheme.textTertiary),
              ),
              SizedBox(height: AppTheme.spacingXSmall),
              Text(
                'Thoughts on\ncraft & form',
                style: AppTheme.heading(AppTheme.headingSmall, AppTheme.textPrimary),
              ),
              SizedBox(height: AppTheme.spacingLarge),
              GestureDetector(
                onTap: () {
                  Navigator.pushNamed(context, '/eepytown');
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                  decoration: BoxDecoration(
                    color: AppTheme.accentPurple,
                    borderRadius: BorderRadius.circular(AppTheme.radiusSmall),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(Icons.nights_stay, color: Colors.white, size: 16),
                      SizedBox(width: AppTheme.spacingXSmall),
                      Text(
                        'VIEW EEPYTOWN PITCH',
                        style: AppTheme.buttonText,
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFeaturedPost() {
    final featuredPost = postsData.map((json) => Post.fromJson(json)).first;

    return SliverToBoxAdapter(
      child: FeaturedPost(
        post: featuredPost,
        onTap: () {
          Navigator.push(
            context,
            PageRouteBuilder(
              pageBuilder: (context, animation, secondaryAnimation) =>
                  PostDetailScreen(
                    title: featuredPost.title,
                    date: featuredPost.date,
                    readTime: featuredPost.readTime,
                  ),
              transitionsBuilder: (context, animation, secondaryAnimation, child) {
                return FadeTransition(opacity: animation, child: child);
              },
            ),
          );
        },
      ),
    );
  }

  Widget _buildPostGrid() {
    final posts = postsData.skip(1).map((json) => Post.fromJson(json)).toList();

    return SliverPadding(
      padding: const EdgeInsets.fromLTRB(24, 60, 24, 80),
      sliver: SliverList(
        delegate: SliverChildBuilderDelegate(
              (context, index) {
            final post = posts[index];
            return Padding(
              padding: EdgeInsets.only(bottom: AppTheme.spacingXXLarge - 12),
              child: PostCard(
                post: post,
                onTap: () {
                  Navigator.push(
                    context,
                    PageRouteBuilder(
                      pageBuilder: (context, animation, secondaryAnimation) =>
                          PostDetailScreen(
                            title: post.title,
                            date: post.date,
                            readTime: post.readTime,
                          ),
                      transitionsBuilder: (context, animation, secondaryAnimation, child) {
                        return FadeTransition(opacity: animation, child: child);
                      },
                    ),
                  );
                },
              ),
            );
          },
          childCount: posts.length,
        ),
      ),
    );
  }
}