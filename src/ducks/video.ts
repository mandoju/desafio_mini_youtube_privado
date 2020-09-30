import { Video } from '@models/Video';
import { updateReduxStateArray } from '@utils/redux/updateRedux';
import { AnyAction } from 'redux';
import { RootStateType } from '.';
import { getMock } from '../mocks/VideosMocks';
import { AsyncStorage } from 'react-native';

interface VideoDuck {
  videos: Video[];
  favoriteVideos: Video[];
  loadingMoreVideos: boolean;
}

const INITIAL_STATE: VideoDuck = {
  videos: [],
  favoriteVideos: [],
  loadingMoreVideos: false,
};

const SET_VIDEOS = 'video_set_videos';
const SET_FAVORITE_VIDEOS = 'video_set_favorite_videos';
const START_LOADING_MORE_VIDEOS = 'video_start_loading_more_videos';
const STOP_LOADING_MORE_VIDEOS = 'video_stop_loading_more_videos';

export default (state = INITIAL_STATE, action: AnyAction): VideoDuck => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload };
    case SET_FAVORITE_VIDEOS:
      return { ...state, favoriteVideos: action.payload };
    case START_LOADING_MORE_VIDEOS:
      return { ...state, loadingMoreVideos: true };
    case STOP_LOADING_MORE_VIDEOS:
      return { ...state, loadingMoreVideos: false };
    default:
      return state;
  }
};

export const getVideos = ({
  pageIndex,
}: {
  pageIndex: number;
  callback?: () => void;
}) => {
  return async (dispatch: any, getState: () => RootStateType) => {
    dispatch({ type: START_LOADING_MORE_VIDEOS });
    setTimeout(function () {
      const { favoriteVideos } = getState().video;
      dispatch({ type: STOP_LOADING_MORE_VIDEOS });
      if (pageIndex < 2) {
        const old_videos = getState().video.videos;
        const videos_request = getMock(pageIndex);
        if (videos_request) {
          const new_videos = videos_request.map((vr) => ({
            ...vr,
            favorite: !!favoriteVideos.find((fv) => fv.id == vr.id),
          }));
          const payload = [...old_videos, ...new_videos];
          dispatch({ type: SET_VIDEOS, payload });
        }
      }
    }, 3000);
  };
};

export const favoriteVideo = ({ id }: { id: string }) => {
  return async (dispatch: any, getState: () => RootStateType) => {
    const { videos, favoriteVideos } = getState().video;
    const oldValue = videos.find((v) => v.id == id);
    if (oldValue) {
      const newValue = {
        ...oldValue,
        favorite: !oldValue.favorite,
      };

      if (oldValue.favorite) {
        //remover da lista de favoritos
        const newFavorites = favoriteVideos.filter((v) => v.id != id);
        dispatch({ type: SET_FAVORITE_VIDEOS, payload: newFavorites });
        AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      } else {
        //adicionar na lista de favoritos
        const newFavorites = [...favoriteVideos, newValue];
        dispatch({ type: SET_FAVORITE_VIDEOS, payload: newFavorites });
        AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      }

      const payload = updateReduxStateArray({
        newValue,
        oldValue,
        arrayValues: videos,
      });
      dispatch({ type: SET_VIDEOS, payload });
    }
  };
};

export const autoFavoriteVideos = ({ videos }: { videos: Video[] }) => {
  return async (dispatch: any) => {
    dispatch({ type: SET_FAVORITE_VIDEOS, payload: videos });
  };
};
