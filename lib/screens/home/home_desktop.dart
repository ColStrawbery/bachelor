
import 'package:flutter/material.dart';
import '../../components/featured_post.dart';
import '../../components/post_card.dart';
import '../../data/posts_data.dart';
import '../../data/post_model.dart';
import '../../theme/app_theme.dart';
import '../post_detail_screen.dart'; // You'll need this for navigation

class BlogHomeDesktop extends StatefulWidget {
  const BlogHomeDesktop({Key? key}) : super(key: key);

  @override
  State<BlogHomeDesktop> createState() => _BlogHomeDesktopState();
}

class _BlogHomeDesktopState extends State<BlogHomeDesktop> {
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
          _buildPostGrid(), // 3-column grid for desktop
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
          padding: AppTheme.paddingDesktop,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'ARCHIVE',
                style: AppTheme.archiveLabel(AppTheme.textTertiary),
              ),
              SizedBox(height: AppTheme.spacingSmall),
              Text(
                'Thoughts on\ncraft & form',
                style: AppTheme.heading(AppTheme.headingLarge, AppTheme.textPrimary),
              ),
              SizedBox(height: AppTheme.spacingXLarge),
              GestureDetector(
                onTap: () {
                  Navigator.pushNamed(context, '/eepytown');
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
                  decoration: BoxDecoration(
                    color: AppTheme.accentPurple,
                    borderRadius: BorderRadius.circular(AppTheme.radiusSmall),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(Icons.nights_stay, color: Colors.white, size: 18),
                      SizedBox(width: AppTheme.spacingSmall),
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

  Widget _buildPostGrid() {
    final posts = postsData.skip(1).map((json) => Post.fromJson(json)).toList();

    return SliverPadding(
      padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 80),
      sliver: SliverGrid(  // ✅ Direct SliverGrid
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3,
          mainAxisSpacing: 60,
          crossAxisSpacing: 40,
          childAspectRatio: 0.75,
        ),
        delegate: SliverChildBuilderDelegate(
              (context, index) {
            final post = posts[index];
            return PostCard(
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
            );
          },
          childCount: posts.length,
        ),
      ),
    );
  }

  Widget _buildFeaturedPost() {
    final featuredPost = postsData.map((json) => Post.fromJson(json)).first;

    return SliverToBoxAdapter(
      child: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 1200),
          padding: const EdgeInsets.symmetric(horizontal: 80),
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
        ),
      ),
    );
  }
// ... other methods
}

