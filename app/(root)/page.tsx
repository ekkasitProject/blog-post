import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import { auth } from "@/auth";
import StartupCard from "@/components/StartupCard";
import { StartupTypeCard } from "@/types/startup";

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {
  try {
    const query = (await searchParams).query;
    
    // สร้าง URL with query parameters
    const url = new URL('http://localhost:3000/api/posts');
    if (query) {
      url.searchParams.append('query', query);
    }

    const response = await fetch(url, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await response.json();
    console.log(posts);
    
    return (
      <>
        <section className="pink_container">
          <h1 className="heading">
            Pitch Your Startup, <br /> Connect With Entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>

          <SearchForm query={query} />
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query
              ? `Showing results for "${query}"`
              : "All Startups"}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post:StartupTypeCard, index:number) => (
                <StartupCard key={post._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>
        </section>
      </>
    );
  } catch (error) {
    console.error('Error:', error);
    return <div>Failed to load startups</div>;
  }
}