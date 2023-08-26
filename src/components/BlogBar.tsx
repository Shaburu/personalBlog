// event liste
//function
// update variable

function updateProgressBar(){
    const {scrollTop, scrollHeight} =document.
    documentElement;
    const scrollPercent = `
    ${(scrollTop /(scrollHeight-window.innerHeight)) * 100}%
    `;
    const progressBar = document.querySelector('.progress') as HTMLElement;
    progressBar.style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll',updateProgressBar)
export const BlogBar = () => {
    
    return (
      <div className="progress">
      </div>
      );
  };