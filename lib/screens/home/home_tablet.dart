import 'package:flutter/material.dart';
import '../../components/featured_post.dart';
import '../../components/post_card.dart';
import '../../data/posts_data.dart';
import '../../data/post_model.dart';
import '../post_detail_screen.dart';

class BlogHomeTablet extends StatefulWidget {
  const BlogHomeTablet({Key? key}) : super(key: key);

  @override
  State<BlogHomeTablet> createState() => _BlogHomeTabletState();
}

class _BlogHomeTabletState extends State<BlogHomeTablet> {
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
          padding: const EdgeInsets.fromLTRB(40, 60, 40, 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'ARCHIVE',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w500,
                  letterSpacing: 2.0,
                  color: Colors.black.withOpacity(0.4),
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Thoughts on\ncraft & form',
                style: TextStyle(
                  fontSize: 48,
                  fontWeight: FontWeight.w300,
                  height: 1.1,
                  letterSpacing: -1.5,
                  color: Colors.black,
                ),
              ),
              const SizedBox(height: 24),
              GestureDetector(
                onTap: () {
                  Navigator.pushNamed(context, '/eepytown');
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                  decoration: BoxDecoration(
                    color: const Color(0xFF605CA9),
                    borderRadius: BorderRadius.circular(2),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: const [
                      Icon(Icons.nights_stay, color: Colors.white, size: 16),
                      SizedBox(width: 8),
                      Text(
                        'VIEW EEPYTOWN PITCH',
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w500,
                          letterSpacing: 1.5,
                          color: Colors.white,
                        ),
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
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 40),
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
    );
  }

  Widget _buildPostGrid() {
    final posts = postsData.skip(1).map((json) => Post.fromJson(json)).toList();

    return SliverPadding(
      padding: const EdgeInsets.fromLTRB(40, 60, 40, 80),
      sliver: SliverGrid(
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          mainAxisSpacing: 48,
          crossAxisSpacing: 32,
          childAspectRatio: 0.9,
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
}