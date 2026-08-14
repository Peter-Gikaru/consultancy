import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'posts.json');

function getPostsData() {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  try {
    return JSON.parse(fileContent);
  } catch (e) {
    return [];
  }
}

function savePostsData(posts) {
  const dirPath = path.dirname(dataFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2), 'utf8');
}

export async function GET() {
  const posts = getPostsData();
  return NextResponse.json({ success: true, posts });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, category, author, date, summary, content, mediaType, mediaUrl, impactMetric, highlights } = body;

    if (!title || !category || !summary) {
      return NextResponse.json({ success: false, error: 'Title, Category, and Summary are required.' }, { status: 400 });
    }

    const posts = getPostsData();
    const newPost = {
      id: `post-${Date.now()}`,
      title,
      category: category || 'General Policy',
      author: author || 'Built on Site Field Team',
      date: date || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      summary,
      content: content || summary,
      mediaType: mediaType || 'image',
      mediaUrl: mediaUrl || '/images/policy-meeting.jpg',
      impactMetric: impactMetric || 'Verified Field Impact',
      highlights: highlights || [summary]
    };

    posts.unshift(newPost);
    savePostsData(posts);

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, error: 'Post ID is required' }, { status: 400 });
    }

    let posts = getPostsData();
    posts = posts.filter((p) => p.id !== id);
    savePostsData(posts);

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
