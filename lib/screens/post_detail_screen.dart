import 'package:flutter/material.dart';

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