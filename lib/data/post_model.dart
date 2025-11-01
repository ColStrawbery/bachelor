class Post {
  final String id;
  final String title;
  final String date;
  final String readTime;
  final String excerpt;
  final String? featuredNum;
  final String? imageUrl;
  final List<String> contentBlocks;

  Post({
    required this.id,
    required this.title,
    required this.date,
    required this.readTime,
    required this.excerpt,
    this.featuredNum,
    this.imageUrl,
    required this.contentBlocks,
  });

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'],
      title: json['title'],
      date: json['date'],
      readTime: json['readTime'],
      excerpt: json['excerpt'],
      featuredNum: json['featuredNum'],
      imageUrl: json['imageUrl'],
      contentBlocks: List<String>.from(json['contentBlocks']),
    );
  }
}