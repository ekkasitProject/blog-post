import { NextRequest, NextResponse } from "next/server";

const posts =[
  {
    "_id": 1,
    "title": "Innovative Startup",
    "slug": {
      "_type": "slug",
      "current": "innovative-startup"
    },
    "author": {
      "_type": "author",
      "_ref": "author123",
      "name": "Jane Doe",
      "image": "https://via.placeholder.com/48",
      "_id": "author123"
    },
    "views": 1200,
    "description": "An innovative startup focused on sustainability and technology.",
    "category": "Technology",
    "image": "https://via.placeholder.com/400x250",
    "pitch": "Our startup aims to revolutionize the industry with sustainable practices and innovative technology.",
    "_createdAt": "2023-10-15T10:00:00Z"
  },
  {
    "_id": 2,
    "title": "GreenTech Solutions",
    "slug": {
      "_type": "slug",
      "current": "greentech-solutions"
    },
    "author": {
      "_type": "author",
      "_ref": "author124",
      "name": "John Smith",
      "image": "https://via.placeholder.com/48",
      "_id": "author124"
    },
    "views": 850,
    "description": "A green technology company working on clean energy solutions.",
    "category": "Energy",
    "image": "https://via.placeholder.com/400x250",
    "pitch": "Harnessing the power of clean energy to create a sustainable future.",
    "_createdAt": "2023-11-01T08:00:00Z"
  },
  {
    "_id": 3,
    "title": "SmartHome Innovations",
    "slug": {
      "_type": "slug",
      "current": "smarthome-innovations"
    },
    "author": {
      "_type": "author",
      "_ref": "author125",
      "name": "Alice Johnson",
      "image": "https://via.placeholder.com/48",
      "_id": "author125"
    },
    "views": 500,
    "description": "A startup focused on integrating AI with home automation.",
    "category": "Smart Home",
    "image": "https://via.placeholder.com/400x250",
    "pitch": "Bringing smart, AI-driven solutions to your home for a connected, efficient lifestyle.",
    "_createdAt": "2023-09-20T14:30:00Z"
  },
  {
    "_id": 4,
    "title": "MedTech Ventures",
    "slug": {
      "_type": "slug",
      "current": "medtech-ventures"
    },
    "author": {
      "_type": "author",
      "_ref": "author126",
      "name": "Michael Lee",
      "image": "https://via.placeholder.com/48",
      "_id": "author126"
    },
    "views": 1340,
    "description": "MedTech Ventures is pioneering medical technology solutions.",
    "category": "Health",
    "image": "https://via.placeholder.com/400x250",
    "pitch": "Innovating healthcare with cutting-edge technology for better patient care.",
    "_createdAt": "2023-08-10T09:15:00Z"
  },
  {
    "_id": 5,
    "title": "AI Robotics",
    "slug": {
      "_type": "slug",
      "current": "ai-robotics"
    },
    "author": {
      "_type": "author",
      "_ref": "author127",
      "name": "David Kim",
      "image": "https://via.placeholder.com/48",
      "_id": "author127"
    },
    "views": 950,
    "description": "Developing AI-powered robots for industrial applications.",
    "category": "Robotics",
    "image": "https://via.placeholder.com/400x250",
    "pitch": "Revolutionizing the industrial sector with intelligent robotic automation.",
    "_createdAt": "2023-07-25T11:20:00Z"
  }
];  
export async function GET(request: NextRequest) {
  try {
    // รับค่า query parameter
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query')?.toLowerCase();

    // ถ้ามีการค้นหา ให้กรองข้อมูล
    if (query) {
      const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
      );
      return NextResponse.json(filteredPosts);
    }

    // ถ้าไม่มีการค้นหา ส่งข้อมูลทั้งหมด
    return NextResponse.json(posts);

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}