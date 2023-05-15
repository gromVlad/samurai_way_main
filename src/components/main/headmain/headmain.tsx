import React, { ChangeEvent} from "react";
import styles from "./headmain.module.css";
import { DataPostType} from "../../redusers/reduсer_post";
import { InputIsDone } from "../../inputIsDone.tsx/inputIsDone";
import { ToggleSwitch } from "../../toogle/toogle";

type HeadmainType = {
  store: DataPostType;
  status: null | string;
  updateStatusThunk: (status: string) => void;
  updatePhotoThunk: (photo: File) => void;
  isMyAccout: boolean;
  updateProfileThunk: (profile: any, userID: string) => void;
  myId: string;
};

export function Headmain(props: HeadmainType) {
  const {
    store,
    status,
    updateStatusThunk,
    updateProfileThunk,
    updatePhotoThunk,
    isMyAccout,
    myId,
  } = props;


  //store profile defoault for updateProfileThunk
  const ProfileStore = {
    aboutMe: store.profile?.aboutMe,
    userId: store.profile?.userId,
    lookingForAJob: store.profile?.lookingForAJob,
    lookingForAJobDescription: store.profile?.lookingForAJobDescription,
    fullName: store.profile?.fullName,
    contacts: store.profile?.contacts 
  };

  //add new photo
  const getNewPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      updatePhotoThunk(e.target.files[0]);
    }
  };

  return (
    /* defoult value */
    <div className={styles.container}>
      {!store.profile ? (
        <div className={styles.placeholder}>
          <img
            src="https://public.bnbstatic.com/image/cms/blog/20220329/7c0fb91f-61db-4541-9a33-8b76dde47b36.png"
            alt="play"
            className={styles.placeholderImage}
          />
          <h2 className={styles.placeholderTitle}>No posts yet</h2>
        </div>
      ) : (
        /* img */
        <div className={styles.profile}>
          <div className={styles.profilePhoto}>
            {store.profile.photos.large && (
              <img
                src={store.profile.photos.large}
                alt={store.profile.fullName}
                className={styles.profileImage}
              />
            )}

            {/* change image */}
            {isMyAccout && (
              <label className={styles.fileInputLabel}>
                Change image
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={getNewPhoto}
                  className={styles.fileInput}
                />
              </label>
            )}
          </div>

          {/* fullName */}
          <div className={styles.profileInfo}>
            {isMyAccout ? (
              <h1 className={styles.profileName}>
                <InputIsDone
                  status={store.profile.fullName}
                  newStatus={(value) =>
                    updateProfileThunk(
                      { ...ProfileStore, fullName: value },
                      myId
                    )
                  }
                />
              </h1>
            ) : (
              <h1 className={styles.profileName}>{store.profile.fullName}</h1>
            )}

            {/* aboutMe */}
            {isMyAccout ? (
              <p className={styles.profileAbout}>
                <InputIsDone
                  status={store.profile.aboutMe}
                  newStatus={(value) =>
                    updateProfileThunk(
                      { ...ProfileStore, aboutMe: value },
                      myId
                    )
                  }
                />
              </p>
            ) : (
              <p className={styles.profileAbout}>{store.profile.aboutMe}</p>
            )}

            {/* status */}
            <p className={styles.profileAbout}>
              {isMyAccout ? (
                <InputIsDone
                  status={status ? status : "not  status"}
                  newStatus={updateStatusThunk}
                />
              ) : (
                <p className={styles.profileAbout}>
                  {status ? status : "not  status"}
                </p>
              )}
            </p>

            {/* contacts */}
            <ul className={styles.profileContacts}>
              {Object.entries(store.profile.contacts).map(([key, value]) => (
                <li key={key} className={styles.profileContactItem}>
                  <div style={{ display: "inline-block" }}>
                    {isMyAccout ? (
                      <InputIsDone
                        keyValue={key}
                        status={value}
                        newStatus={(valueNew) =>
                          updateProfileThunk(
                            {
                              ...ProfileStore,
                              contacts: {
                                ...ProfileStore.contacts,
                                [key]: valueNew,
                              },
                            },
                            myId
                          )
                        }
                      />
                    ) : (
                      <p style={{ display: "inline-block", margin: 0 }}>
                        {key}
                      </p>
                    )}
                  </div>
                  <a
                    href={value}
                    target="_blank"
                    className={styles.profileContactLink}
                    style={{ display: "inline-block", marginLeft: "8px" }}
                  >
                    link 
                  </a>
                </li>
              ))}
            </ul>
            
            {/* profile Job */}
            <div className={styles.profileJob}>
              <p>
                {isMyAccout ? (
                  <ToggleSwitch
                    label={"Looking for a job:"}
                    checked={store.profile.lookingForAJob}
                    onChange={(val) => {
                      updateProfileThunk(
                        { ...ProfileStore, lookingForAJob: val },
                        myId
                      );
                    }}
                  />
                ) : (
                  "Looking for a job: "
                )}
                {store.profile.lookingForAJob ? "Yes" : "No"}
              </p>
            </div>

            {/*looking For A Job*/}
            {store.profile.lookingForAJob && (
              <p className={styles.profileJobDescTitle}>
                Job description :
                {isMyAccout ? (
                  <div className={styles.profileJobTitle}>
                    <InputIsDone
                      status={store.profile.lookingForAJobDescription}
                      newStatus={(value) =>
                        updateProfileThunk(
                          { ...ProfileStore, lookingForAJobDescription: value },
                          myId
                        )
                      }
                    />
                  </div>
                ) : (
                  store.profile.lookingForAJobDescription
                )}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
