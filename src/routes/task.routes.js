const router = require('express').Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { 
  create, 
  getAll, 
  update, 
  delete: deleteTask 
} = require('../controllers/task.controller');

router.post('/',      auth,               create);
router.get('/',       auth,               getAll);
router.put('/:id',    auth,               update);
router.delete('/:id', auth, role('admin'), deleteTask);

module.exports = router;