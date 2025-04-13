import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)//keeping orignal name as it will available for short time on disk  so dont have problem if more than one file with same name
  }
})

export const upload = multer({ storage: storage })