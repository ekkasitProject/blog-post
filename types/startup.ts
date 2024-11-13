export type StartupTypeCard = {
    _id: number;
    title: string;
    slug: {
      _type: string;
      current: string;
    };
    author: {
      _type: string;
      _ref: string;
      name?: string;
      image?: string;
      _id?: string;
    };
    views: number;
    description: string;
    category: string;
    image: string;
    pitch: string;
    _createdAt: string;
  };