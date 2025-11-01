import 'package:flutter/material.dart';
import '../data/post_model.dart';

class FeaturedPost extends StatelessWidget {
  final Post post;
  final VoidCallback onTap;

  const FeaturedPost({
    Key? key,
    required this.post,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
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
                    post.featuredNum ?? '01',
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
                  post.date.toUpperCase(),
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
                  post.readTime.toUpperCase(),
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
            Text(
              post.title,
              style: const TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.w400,
                height: 1.2,
                letterSpacing: -0.5,
                color: Colors.black,
              ),
            ),
            const SizedBox(height: 16),
            Text(
              post.excerpt,
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
    );
  }
}