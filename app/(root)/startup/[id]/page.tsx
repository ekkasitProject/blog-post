import React from 'react'


export const experimental_ppr = true;


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    console.log(params);
    
    return (
    <div>
      {(await params).id}
    </div>
  )
}

export default Page;
