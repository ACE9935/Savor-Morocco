import { storage } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const handleUploadOfImage = async (image: File | undefined | string, dir: string): Promise<string | null> => {
    if (!image || typeof image == "string") return null;
  
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `${dir}/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
  
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log('Upload progress:', progress);
        },
        error => {
          console.error('Upload error:', error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            resolve(downloadURL);
          }).catch(error => {
            console.error('Error getting download URL:', error);
            reject(error);
          });
        }
      );
    });
  };