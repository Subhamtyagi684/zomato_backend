const {Router} = require('express');
const getLocationController = require('../controller/getLocationController');
const getMealTypesController = require('../controller/getMealTypesController');
const getRestaurantByLocIdController = require('../controller/getRestaurantByLocIdController');
const getMenuItemsByResIdController = require('../controller/getMenuItemsByResIdController');
const getRestaurantController = require('../controller/getRestaurantController');
const router = Router();

router.get('/locations',getLocationController);
router.get('/mealtypes',getMealTypesController);
router.get('/restaurants/',getRestaurantController);
router.get('/restaurant/:locId',getRestaurantByLocIdController);
// router.get('/login');
// router.get('/signup')
// router.get('/filter')  
router.get('/menuitems/:resId',getMenuItemsByResIdController);    

module.exports = router;