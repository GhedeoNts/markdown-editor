import React, { useState, useCallback } from 'react'
import Editor from './editor'
import Preview from './preview'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>(`# Hello 👨‍💻

  # 💻 Tech Stack:
  ### FrontEnd
  ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![TAILWINDCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![BOOTSTRAP5](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
  ![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![MATERIALUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
  <br/>
  ### BackEnd
  ![NODEJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![EXPRESSJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
  ![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
  ![LARAVEL](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
  ![POSTGRESQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
  ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
  <br/>
  ### Mobile
  ![REACTNATIVE](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  <br/>
  ### Outils de gestion de projet
  ![TRELLO](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
  ![MIRO](https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white)
  ### Autres Outils
  ![TYPESCRIPT](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![FIGMA](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
  ![FRAMER](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
  ![PROTOIO](https://img.shields.io/badge/Proto.io-161637?style=for-the-badge&logo=proto.io&logoColor=00e5ff)
  ![SKETCH](https://img.shields.io/badge/Sketch-FFB387?style=for-the-badge&logo=sketch&logoColor=black)
  ![PHOTOSHOP](https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black)
  ![CANVA](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white)
  ![BEHANCE](https://img.shields.io/badge/Behance-0054F7?style=for-the-badge&logo=behance&logoColor=white)
  ![DRIBBLE](https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white)
  ### OS
  ![LINUX](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
  ![FEDORA](https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white)
  ![UBUNTU](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
  ![KALILINUX](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white)
  ![WINDOWS](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
  <br/>
  # 🧑‍💻 Mes projets :
   [![PORTFOLIO](https://img.shields.io/badge/Mon_portfolio-v1.0.0-cyan)](https://github.com/GhedeoNts/ghedeonts)
   [![CSEAPPMOBILE](https://img.shields.io/badge/CSEAPPMOBILE-v1.0.0-blue)](https://github.com/GhedeoNts/frontappmobile)
   [![TOPDOCAPP](https://img.shields.io/badge/TOPDOC-PWA-grren)](https://github.com/GhedeoNts/topdocwebsite)
  <br>
  # 📊 GitHub Stats:
  ![](https://github-readme-stats.vercel.app/api?username=GhedeoNts&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=10)
  <br/>
  ![](https://github-readme-stats.vercel.app/api/top-langs/?username=GhedeoNts&theme=blue-green)
  <br/>
  ### ✍️ Citation de Développeur
  ![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight)
  <br/>
  #####
  \n`)

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
