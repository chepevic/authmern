const {Router}=require("express");
const router=Router();

const {createCourse, getCourses, getCourse, updateCourse, deleteCourse}=require("../controllers/coursesController")

router.post("/", createCourse );
router.get('/',getCourses);
router.get('/:id', getCourse);
router.put('/:id',updateCourse);
router.delete('/:id',deleteCourse);

module.exports=router;
