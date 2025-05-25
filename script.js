const courses = [
    { title: "Introduction to HTML", description: "Learn the basics of web development." },
    { title: "CSS for Beginners", description: "Style your web pages beautifully." },
    { title: "JavaScript Essentials", description: "Make your websites interactive." },
    { title: "React 101", description: "Build powerful UIs with React." },
    { title: "Python for Data Science", description: "Analyze data with Python." }
  ];
  
  const courseContainer = document.getElementById('courseContainer');
  const searchInput = document.getElementById('searchInput');
  
  function displayCourses(filteredCourses) {
    courseContainer.innerHTML = '';
    filteredCourses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
      courseContainer.appendChild(courseCard);
    });
  }
  
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(query)
    );
    displayCourses(filtered);
  });
  
  window.onload = () => displayCourses(courses);
  