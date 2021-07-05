// prototypes/constructors/molds
class LearningPath {
  constructor({
    path_name,
    courses = [],
  }) {
    this.path_name = path_name;
    courses;
  };
};
class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = 'spanish',
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName === '') {
      console.warn('Nombre no válido.');
    } else {
      this._name = newName;
    }
  }
};
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    this.socialMedia = {
      username,
      twitter,
      instagram,
      facebook,
    };
  };
};
class ClassForCourse {
  constructor({
    name,
    id,
    numberOfClass,
    comments = [
      numComments = 0,
      messages = [],
    ],
    questions = [],
    classResources = [
      links = [],
      text = undefined,
    ],
    nextClass,
    previousClass,
  }) {
    this.name = name;
    this.id = id;
    this.numberOfClass = numberOfClass;
    this.comments = comments;
    this.questions = questions;
    this.classResources = classResources;
    this.nextClass = nextClass;
    this.previousClass = previousClass;

  }
}
class PlatziClass {
  cosntructor({
    name,
    videoId,
  }) {
    this.name = name;
    this.videoId = videoId;
  }

  reproduce() {
    videoPlay(this.videoId);
  }
  pause() {
    videoStop(this.videoId);
  }
}
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  };

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Lo sentimos ' + this.name + ', solo puedes tomar cursos abiertos o gratis.')
    }
  };
}
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  };

  approveCourse(newCourse) {
    if(newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn('Lo sentimos ' + this.name + ', solo puedes tomar cursos en español.')
    }
  };
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  };
}



function videoPlay(id) {
  const secretUrl = 'https://www.google.com/';
  console.log('Se reproduce desde la url' + secretUrl);
}
function videoStop(id) {
  const secretUrl = 'https://www.medium.com/';
  console.log('Se detuvo la url' + secretUrl);
}

// Course-lessons
const firstLinecodeLesson = new ClassForCourse({
  name: 'Mi primera línea de código',
  id: 'BPCC1',
  numberOfClass: 1,
  comments: [
    numComments = 16,
    messages = [],
  ],
  questions: [],
  classResources: [
    links = [],
    text = 'lorem ipsum in dolor sit amet',
  ],
  nextClass: '¿qué es HTML/CSS/JS?',
  previousClass: '',
})

// courses
const basicProgrammingCourse = new Course({
  name: 'Curso de Programación básica',
  classes: [
    firstLinecodeLesson,
    '¿qué es HTML/CSS/JS?',
  ],
  isFree: true,
})
const webIntroCourse = new Course({
  name: 'Introducción a la Web',
  classes: [
    'MBienvenido al Desarrollo Web',
    '¿Cómo empezó todo?',
  ]
})
const pooCourse = new Course({
  name: 'Curso de POO',
  classes: [
  '¿Por qué aprender Programación Orientada a Objetos?',
  '¿Qué resuelve la Programación Orientada a Objetos?',
  ],
  lang: 'english',
})

// grades
const webDevelopmentGrades = [
  basicProgrammingCourse,
  webIntroCourse,
  pooCourse,
];
const ExclusiveCoursesGrades = [
  'Cómo Conseguir Trabajo en Programación',
  'Curso de Finanzas para Startups',
  'Curso de Inglés Técnico para Profesionales'
];
const pythonDevGrades = [
  basicProgrammingCourse,
  webIntroCourse,
  pooCourse,
  'Curso de Fundamentos de Web Scraping con Python y Xpath',
  'Curso de Introducción al Pensamiento Computacional con Python',
];

// Colleges
const pythonDevelopmentCollege = new LearningPath({
  path_name: 'Escuela de Desarrollo en Python',
  courses: pythonDevGrades,
})
const webDevelopmentCollege = new LearningPath({
  path_name: 'Escuela de Desarrollo Web',
  courses: webDevelopmentGrades,
});
const exclusiveCoursesCollege = new LearningPath({
  path_name: 'Cursos Exclusivos', 
  courses: ExclusiveCoursesGrades,
});

// students
const andres = new FreeStudent({
  name :'Andrés',
  username: 'altair__6',
  email: 'andres@mail.com',
  instagram: 'altair__6',
  learningPaths: [ pythonDevelopmentCollege ],
})
const felipe = new BasicStudent({
  name :'Felipe',
  username: 'Jaya__9',
  email: 'felipe@mail.com',
  instagram: 'Jaya__9',
  twitter: 'Jaya__9',
  learningPaths: [ webDevelopmentCollege, exclusiveCoursesCollege ],
})




















// other things
class SerVivo {

  constructor(edad, feeder) {
    this.edad = edad;
    this.feeder = feeder;
  }

  alimentarse() {
    feeder.feed(this.edad);
    /* Qué hace el feeder? Y yo que sé. Ni lo sé ni me importa.
     Me importa que lo hace, no el CÓMO lo hace.
     Yo solo sé que le paso la edad a ese método y el ser vivo se alimenta correctamente!
     Esto es abstracción. Sabemos que esto hace lo que necesitamos, pero el funcionamiento interno
     nos es completamente irrelevante. Es decir, abstraemos al programador del funcionamiento
     interno del método para que pueda centrarse en arreglar/hacer lo que necesite e ignorar lo demás*/
  }
}