import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post";

export default function Timeline() {
  //  get the logged in users photos
  const { photos } = usePhotos();

  // on loading --> use react skeleton

  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          <Skeleton count={4} width={640} height={500} className="mb-5" />
        </>
      ) : photos?.length > 0 ? (
        // if we have pictures, render them (create a post component)
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        // if the user has no pictures, tell them to create some pictures
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
  );
}

// has posts
