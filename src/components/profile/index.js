import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { getUserPhotosByUserId } from "../../services/firebase";
import Photos from "./photos";

export default function UserProfile({ user }) {
  // use reducer instead of useState
  // if useState, store primitive types...if objects and arrays, use useReducer.  if you are using Redux, can get even more complicated

  // take current state and spread it over new state
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {}, // always object
    photosCollection: [], // always array
    followerCount: 0,
  };

  // get the values and use dispatch to set the values down below
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUserId(user.userId);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }),
};
