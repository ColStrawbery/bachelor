import 'package:flutter/material.dart';

void main() {
  runApp(const DesignerBlogApp());
}

class DesignerBlogApp extends StatelessWidget {
  const DesignerBlogApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Everything not saved will be lost.',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: const Color(0xFFFAFAFA),
        fontFamily: 'SF Pro Text',
      ),
      home: const BlogHomeScreen(),
    );
  }
}

class BlogHomeScreen extends StatefulWidget {
  const BlogHomeScreen({Key? key}) : super(key: key);

  @override
  State<BlogHomeScreen> createState() => _BlogHomeScreenState();
}

class _BlogHomeScreenState extends State<BlogHomeScreen> {
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
          padding: const EdgeInsets.fromLTRB(24, 60, 24, 40),
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
                  fontSize: 42,
                  fontWeight: FontWeight.w300,
                  height: 1.1,
                  letterSpacing: -1.5,
                  color: Colors.black,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFeaturedPost() {
    return SliverToBoxAdapter(
      child: GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            PageRouteBuilder(
              pageBuilder: (context, animation, secondaryAnimation) =>
              const PostDetailScreen(
                title: 'On whitespace as a design tool',
                date: '28 Oct 2025',
                readTime: '8 min',
              ),
              transitionsBuilder: (context, animation, secondaryAnimation, child) {
                return FadeTransition(opacity: animation, child: child);
              },
            ),
          );
        },
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              AspectRatio(
                aspectRatio: 1.5,
                child: Container(
                  decoration: BoxDecoration(
                    color: const Color(0xFF0A0A0A),
                    borderRadius: BorderRadius.circular(2),
                  ),
                  child: Center(
                    child: Text(
                      '01',
                      style: TextStyle(
                        fontSize: 120,
                        fontWeight: FontWeight.w200,
                        color: Colors.white.withOpacity(0.15),
                        height: 1,
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Text(
                    '28 OCT',
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w500,
                      letterSpacing: 1.5,
                      color: Colors.black.withOpacity(0.4),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Container(
                    width: 2,
                    height: 2,
                    decoration: BoxDecoration(
                      color: Colors.black.withOpacity(0.2),
                      shape: BoxShape.circle,
                    ),
                  ),
                  const SizedBox(width: 12),
                  Text(
                    '8 MIN',
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w500,
                      letterSpacing: 1.5,
                      color: Colors.black.withOpacity(0.4),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              const Text(
                'On whitespace as a design tool',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.w400,
                  height: 1.2,
                  letterSpacing: -0.5,
                  color: Colors.black,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                'Exploring the intentional use of negative space in digital interfaces and why less is rarely more—it\'s just different.',
                style: TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.w400,
                  height: 1.5,
                  color: Colors.black.withOpacity(0.6),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildPostGrid() {
    final posts = [
      {'title': 'Typography in constraint', 'date': '22 Oct', 'num': '02'},
      {'title': 'Grid systems that flex', 'date': '15 Oct', 'num': '03'},
      {'title': 'Color as structure', 'date': '09 Oct', 'num': '04'},
      {'title': 'Motion with intent', 'date': '01 Oct', 'num': '05'},
      {'title': 'Brutalism reconsidered', 'date': '24 Sep', 'num': '06'},
      {'title': 'The rhythm of scroll', 'date': '18 Sep', 'num': '07'},
    ];

    return SliverPadding(
      padding: const EdgeInsets.fromLTRB(24, 60, 24, 80),
      sliver: SliverList(
        delegate: SliverChildBuilderDelegate(
              (context, index) {
            final post = posts[index];
            return Padding(
              padding: const EdgeInsets.only(bottom: 48),
              child: GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    PageRouteBuilder(
                      pageBuilder: (context, animation, secondaryAnimation) =>
                          PostDetailScreen(
                            title: post['title']!,
                            date: post['date']!,
                            readTime: '6 min',
                          ),
                      transitionsBuilder: (context, animation, secondaryAnimation, child) {
                        return FadeTransition(opacity: animation, child: child);
                      },
                    ),
                  );
                },
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          post['num']!,
                          style: TextStyle(
                            fontSize: 48,
                            fontWeight: FontWeight.w200,
                            height: 1,
                            color: Colors.black.withOpacity(0.1),
                          ),
                        ),
                        const SizedBox(width: 20),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const SizedBox(height: 4),
                              Text(
                                post['date']!.toUpperCase(),
                                style: TextStyle(
                                  fontSize: 10,
                                  fontWeight: FontWeight.w500,
                                  letterSpacing: 1.5,
                                  color: Colors.black.withOpacity(0.4),
                                ),
                              ),
                              const SizedBox(height: 8),
                              Text(
                                post['title']!,
                                style: const TextStyle(
                                  fontSize: 22,
                                  fontWeight: FontWeight.w400,
                                  height: 1.3,
                                  letterSpacing: -0.3,
                                  color: Colors.black,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 68, top: 16),
                      child: Container(
                        height: 1,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              Colors.black.withOpacity(0.15),
                              Colors.black.withOpacity(0.0),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
          childCount: posts.length,
        ),
      ),
    );
  }
}

class PostDetailScreen extends StatelessWidget {
  final String title;
  final String date;
  final String readTime;

  const PostDetailScreen({
    Key? key,
    required this.title,
    required this.date,
    required this.readTime,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFAFAFA),
      body: CustomScrollView(
        physics: const BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            backgroundColor: Colors.transparent,
            elevation: 0,
            leading: IconButton(
              icon: const Icon(Icons.arrow_back, color: Colors.black, size: 20),
              onPressed: () => Navigator.pop(context),
            ),
            floating: true,
            snap: true,
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(24, 20, 24, 40),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        date.toUpperCase(),
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.w500,
                          letterSpacing: 1.5,
                          color: Colors.black.withOpacity(0.4),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Container(
                        width: 2,
                        height: 2,
                        decoration: BoxDecoration(
                          color: Colors.black.withOpacity(0.2),
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 12),
                      Text(
                        readTime.toUpperCase(),
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.w500,
                          letterSpacing: 1.5,
                          color: Colors.black.withOpacity(0.4),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  Text(
                    title,
                    style: const TextStyle(
                      fontSize: 36,
                      fontWeight: FontWeight.w300,
                      height: 1.15,
                      letterSpacing: -1,
                      color: Colors.black,
                    ),
                  ),
                  const SizedBox(height: 40),
                  _buildParagraph(
                    'The relationship between content and emptiness defines digital space in ways we often overlook. What we choose not to fill becomes as important as what we place with intention.',
                  ),
                  const SizedBox(height: 24),
                  _buildParagraph(
                    'Consider the pause between words, the margin around text, the breathing room that lets hierarchy emerge naturally. These aren\'t decorative choices—they\'re structural decisions that shape how information flows.',
                  ),
                  const SizedBox(height: 24),
                  _buildParagraph(
                    'In practice, this means resisting the urge to fill. It means trusting that space itself carries meaning, creates rhythm, and guides attention more effectively than any additional element could.',
                  ),
                  const SizedBox(height: 40),
                  Container(
                    height: 200,
                    decoration: BoxDecoration(
                      color: const Color(0xFF0A0A0A),
                      borderRadius: BorderRadius.circular(2),
                    ),
                  ),
                  const SizedBox(height: 24),
                  _buildParagraph(
                    'The grid reveals itself not through lines but through alignment. Negative space becomes the structure that holds everything together, invisible yet essential.',
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildParagraph(String text) {
    return Text(
      text,
      style: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.w400,
        height: 1.65,
        color: Colors.black.withOpacity(0.75),
        letterSpacing: -0.1,
      ),
    );
  }
}