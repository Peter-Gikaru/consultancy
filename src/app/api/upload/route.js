import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'images');
    const uploadsDir = path.join(process.cwd(), 'public', 'images', 'uploads');
    
    let filesList = [];

    if (fs.existsSync(imagesDir)) {
      const mainFiles = fs.readdirSync(imagesDir);
      mainFiles.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i)) {
          filesList.push({
            url: `/images/${file}`,
            fileName: file,
            mediaType: 'image'
          });
        }
      });
    }

    if (fs.existsSync(uploadsDir)) {
      const uploadFiles = fs.readdirSync(uploadsDir);
      uploadFiles.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i)) {
          filesList.push({
            url: `/images/uploads/${file}`,
            fileName: file,
            mediaType: 'image'
          });
        }
      });
    }

    return NextResponse.json({
      success: true,
      media: filesList
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const isVideo = file.type.startsWith('video/') || file.name.match(/\.(mp4|webm|mov|avi|mkv)$/i);
    const subFolder = isVideo ? 'videos/uploads' : 'images/uploads';
    const uploadDir = path.join(process.cwd(), 'public', subFolder);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const sanitizedFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = path.join(uploadDir, sanitizedFileName);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/${subFolder}/${sanitizedFileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: file.name,
      mediaType: isVideo ? 'video' : 'image'
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ success: false, error: 'Invalid URL provided' }, { status: 400 });
    }

    const relativePath = url.replace(/^\/+/, '');
    const fullPath = path.join(process.cwd(), 'public', relativePath);
    const publicDir = path.join(process.cwd(), 'public');

    if (!fullPath.startsWith(publicDir)) {
      return NextResponse.json({ success: false, error: 'Access denied' }, { status: 403 });
    }

    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      return NextResponse.json({ success: true, url });
    } else {
      return NextResponse.json({ success: false, error: 'File not found on disk' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
