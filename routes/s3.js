import express from 'express'
import { uploadFile, downloadFile, deleteFile, listFiles } from '../services/s3'

const router = express.Router()

// List All Files from S3
router.get('/list', async (req, res) => {
  const { success, data } = await listFiles()
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

// Upload File to S3
router.post('/upload', uploadFile.single('file'), async (req, res) => {
  return res.json({ success: true, data: req.file })
});

// Download File from S3
router.get('/download/:filename', async (req, res) => {
  const filename = req.params.filename
  const { success, data } = await downloadFile(filename)
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

// Delete File from S3
router.delete('/delete/:filename', async (req, res) => {
  const filename = req.params.filename
  const { success, data } = await deleteFile(filename)
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

export default router

