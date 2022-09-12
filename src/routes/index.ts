import { Router } from 'express'
const router = Router();

import upload from '../libs/multer'
import { getPhotos, createPhoto, deletePhoto, getPhoto, updatePhoto } from '../controllers/photo.controller'
import { setTimeout } from 'timers';

// middleware
// router.use(upload.single('image'));

// routes
router.route('/photos')
    .get(getPhotos)

router.route('/photos/create')
    .post(upload.single('image'), createPhoto);

router.route('/photos/:id')
    .get(getPhoto)

router.route('/photos/edit/:id')
    .put(upload.single('image'), updatePhoto);

router.route('/photos/delete/:id')
    .delete(deletePhoto);

// router.get('/photos', getPhotos)
// router.post('/photos', upload.single('image'), createPhoto)
// router.get('/photos/:id', getPhoto)
// router.put('/photos/edit/:id', updatePhoto)
// router.delete('/photos/delete/:id', deletePhoto)



export default router;