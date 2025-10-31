import 'package:flutter/material.dart';

void main() {
  runApp(const DesignerBlogApp());
}

class DesignerBlogApp extends StatelessWidget {
  const DesignerBlogApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TEST',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: const Color(0xcaf500FA),
        fontFamily: 'SF Pro Text',
      ),
      home: const BlogHomeScreen(),
      routes: {
        '/eepytown': (context) => const EepytownPitchScreen(),
      },
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

// NEW: Eepytown Pitch Screen
class EepytownPitchScreen extends StatefulWidget {
  const EepytownPitchScreen({Key? key}) : super(key: key);

  @override
  State<EepytownPitchScreen> createState() => _EepytownPitchScreenState();
}

class _EepytownPitchScreenState extends State<EepytownPitchScreen> {
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
      backgroundColor: const Color(0xFF0A0A14),
      body: CustomScrollView(
        controller: _scrollController,
        physics: const BouncingScrollPhysics(),
        slivers: [
          _buildEepytownHeader(),
          _buildMainPitch(),
          _buildCharacterList(),
          _buildClosingStatement(),
        ],
      ),
    );
  }

  Widget _buildEepytownHeader() {
    final opacity = (1 - (_scrollOffset / 100)).clamp(0.0, 1.0);

    return SliverToBoxAdapter(
      child: Opacity(
        opacity: opacity,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24, 60, 24, 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              GestureDetector(
                onTap: () => Navigator.pop(context),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(
                      Icons.arrow_back,
                      size: 16,
                      color: Colors.white.withOpacity(0.6),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      'BACK',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w500,
                        letterSpacing: 2.0,
                        color: Colors.white.withOpacity(0.4),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              Row(
                children: [
                  Icon(
                    Icons.nights_stay,
                    size: 14,
                    color: const Color(0xFF605CA9).withOpacity(0.6),
                  ),
                  const SizedBox(width: 8),
                  Text(
                    'NARRATIVE GAME CONCEPT',
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w500,
                      letterSpacing: 2.0,
                      color: Colors.white.withOpacity(0.4),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              const Text(
                'The Prince of\nEepytown',
                style: TextStyle(
                  fontSize: 42,
                  fontWeight: FontWeight.w300,
                  height: 1.1,
                  letterSpacing: -1.5,
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildMainPitch() {
    return SliverToBoxAdapter(
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            AspectRatio(
              aspectRatio: 1.5,
              child: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      const Color(0xFF605CA9).withOpacity(0.2),
                      const Color(0xFF1A1A2E),
                    ],
                  ),
                  borderRadius: BorderRadius.circular(2),
                ),
                child: Stack(
                  children: [
                    Center(
                      child: Icon(
                        Icons.nights_stay,
                        size: 120,
                        color: const Color(0xFF605CA9).withOpacity(0.2),
                      ),
                    ),
                    Container(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: [
                            Colors.transparent,
                            const Color(0xFF0A0A14).withOpacity(0.6),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),
            Row(
              children: [
                Text(
                  'CONCEPT',
                  style: TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.w500,
                    letterSpacing: 1.5,
                    color: Colors.white.withOpacity(0.4),
                  ),
                ),
                const SizedBox(width: 12),
                Container(
                  width: 2,
                  height: 2,
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 12),
                Text(
                  '7 NIGHTS',
                  style: TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.w500,
                    letterSpacing: 1.5,
                    color: Colors.white.withOpacity(0.4),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Text(
              'A young royal with sleep magic faces their first real test',
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.w400,
                height: 1.2,
                letterSpacing: -0.5,
                color: Colors.white.withOpacity(0.95),
              ),
            ),
            const SizedBox(height: 16),
            Text(
              'You\'re the son of King Somnus, a young royal with inherited sleep magic, traveling the kingdom on what\'s supposed to be a diplomatic training mission. Your first time in the field. Your first time making choices that really matter. No palace walls to hide behind, no advisors whispering the right answers. Just you, your untested magic, and people depending on you to figure it out.',
              style: TextStyle(
                fontSize: 15,
                fontWeight: FontWeight.w400,
                height: 1.5,
                color: Colors.white.withOpacity(0.6),
              ),
            ),
            const SizedBox(height: 16),
            Text(
              'Because you\'re encountering shadows that cling to the exhausted, creatures that feed in the spaces between waking and rest. Your power isn\'t about force—it\'s about helping people find peace when they\'ve forgotten how to stop, severing the connections before something worse takes root. One village. Seven nights. And something is feeding on exhaustion faster than you know how to handle.',
              style: TextStyle(
                fontSize: 15,
                fontWeight: FontWeight.w400,
                height: 1.5,
                color: Colors.white.withOpacity(0.6),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCharacterList() {
    final characters = [
      {
        'name': 'SENTINEL DVORAK',
        'role': 'Stag - Military Veteran',
        'num': '02',
        'icon': Icons.shield,
        'shortDesc': 'Your guardian and mission commander. A decorated officer who earned his rank through competence, not politics, but there\'s a reason he accepted this assignment.',
        'fullDesc': 'He speaks little and observes everything, carrying the kind of quiet intensity that makes people nervous. Whatever happened in his past service still weighs on him, and it shows in how carefully he watches over you. Respects efficiency, distrusts luck, and seems determined to keep you safe in a way that feels almost personal.',
      },
      {
        'name': 'TRÜFFEL',
        'role': 'Boar - Royal Chef',
        'num': '03',
        'icon': Icons.restaurant,
        'shortDesc': 'Youngest junior sous-chef ever promoted in the palace kitchens. She\'s here to feed you properly and document regional cuisines, a prestigious research assignment that could make her career.',
        'fullDesc': 'Warm but not soft, caring but never condescending. She sees herself in you more than she\'d admit—knows what it\'s like to grow up too fast, to prove yourself before anyone thinks you\'re ready. When she cooks, it\'s how she takes care of people, how she keeps some sense of control when everything else feels uncertain.',
      },
      {
        'name': 'OLIVE',
        'role': 'Barn Owl - Doctoral Candidate',
        'num': '04',
        'icon': Icons.menu_book,
        'shortDesc': 'Final-year academic doing mandatory thesis fieldwork after years of delay. Studying mycorrhizal networks, how forests connect and communicate underground.',
        'fullDesc': 'Besides that, she\'s an artist trying to capture the beauty in systems most people never see. Brilliant but socially awkward in ways she\'s only starting to recognize. Desperately wants to be useful but constantly fears she\'s a burden. Clumsy with her words and her body. The crew\'s analytical mind and unintentional comic relief, slowly learning that being smart isn\'t the same as being wise.',
      },
    ];

    return SliverPadding(
      padding: const EdgeInsets.fromLTRB(24, 60, 24, 40),
      sliver: SliverList(
        delegate: SliverChildBuilderDelegate(
              (context, index) {
            if (index == 0) {
              return Padding(
                padding: const EdgeInsets.only(bottom: 48),
                child: Text(
                  'You\'re not alone, at least.',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w400,
                    color: Colors.white.withOpacity(0.5),
                  ),
                ),
              );
            }

            final char = characters[index - 1];
            return Padding(
              padding: const EdgeInsets.only(bottom: 48),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        char['num'] as String,
                        style: TextStyle(
                          fontSize: 48,
                          fontWeight: FontWeight.w200,
                          height: 1,
                          color: Colors.white.withOpacity(0.1),
                        ),
                      ),
                      const SizedBox(width: 20),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const SizedBox(height: 4),
                            Row(
                              children: [
                                Icon(
                                  char['icon'] as IconData,
                                  size: 14,
                                  color: const Color(0xFF605CA9).withOpacity(0.6),
                                ),
                                const SizedBox(width: 8),
                                Text(
                                  (char['role'] as String).toUpperCase(),
                                  style: TextStyle(
                                    fontSize: 10,
                                    fontWeight: FontWeight.w500,
                                    letterSpacing: 1.5,
                                    color: Colors.white.withOpacity(0.4),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 8),
                            Text(
                              char['name'] as String,
                              style: TextStyle(
                                fontSize: 22,
                                fontWeight: FontWeight.w400,
                                height: 1.3,
                                letterSpacing: -0.3,
                                color: Colors.white.withOpacity(0.9),
                              ),
                            ),
                            const SizedBox(height: 12),
                            Text(
                              char['shortDesc'] as String,
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w400,
                                height: 1.5,
                                color: Colors.white.withOpacity(0.5),
                              ),
                            ),
                            const SizedBox(height: 16),
                            Container(
                              padding: const EdgeInsets.all(16),
                              decoration: BoxDecoration(
                                color: Colors.white.withOpacity(0.03),
                                borderRadius: BorderRadius.circular(2),
                                border: Border.all(
                                  color: Colors.white.withOpacity(0.05),
                                  width: 1,
                                ),
                              ),
                              child: Text(
                                char['fullDesc'] as String,
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.w400,
                                  height: 1.6,
                                  color: Colors.white.withOpacity(0.6),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 68, top: 24),
                    child: Container(
                      height: 1,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            Colors.white.withOpacity(0.15),
                            Colors.white.withOpacity(0.0),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            );
          },
          childCount: characters.length + 1,
        ),
      ),
    );
  }

  Widget _buildClosingStatement() {
    return SliverToBoxAdapter(
      child: Container(
        margin: const EdgeInsets.fromLTRB(24, 0, 24, 80),
        padding: const EdgeInsets.only(top: 48),
        decoration: BoxDecoration(
          border: Border(
            top: BorderSide(
              color: Colors.white.withOpacity(0.1),
              width: 1,
            ),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Four people who barely know each other, thrust into a mystery that none of them fully understand yet. Something is feeding on exhaustion, and you\'re the only one who can stop it. If you can figure out how before dawn comes.',
              style: TextStyle(
                fontSize: 15,
                fontWeight: FontWeight.w400,
                height: 1.6,
                color: Colors.white.withOpacity(0.7),
              ),
            ),
            const SizedBox(height: 24),
            Row(
              children: [
                Icon(
                  Icons.nights_stay,
                  size: 20,
                  color: const Color(0xFF605CA9),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    'It\'s time to become the Prince of Eepytown.',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w300,
                      letterSpacing: -0.3,
                      color: Colors.white.withOpacity(0.9),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}