import { useEffect, useState } from 'react';

export default function Home() {

  const [buttonText, setButtonText] = useState('CLICK ME');
  const [bt2, xyz] = useState('blabla');

  function cT() {
    xyz('aaha')
    setButtonText('u clicked blabla')
  }


  function changeText() {
    setButtonText('You clicked me!');
    xyz('blabla')
  }

  return (
    <main>
      <div className="w-1/4 p-8 mx-auto mt-4 bg-blue-500 px-20">Hello World
        <button className="button1 w-100 px-8 mt-4 rounded-xl ml-[-30px] md:rounded-lg" onClick={changeText} >{buttonText}</button>

        <button className="button1 w-100 px-8 mt-10 rounded-xl ml-[-30px] md:rounded-lg" onClick={cT} >{bt2}</button>
      </div>

      <div className="listX w-[180px] h-[80px] ml-10 mt-10 bg-green-900 px-20 overflow-hidden">
        <img className="w-[80px] mt-[2px]" src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/06_menu_stack-1024.png"></img>
      </div>
      <div className="listY w-1/4 p-8 ml-[-210px] mt-0 bg-green-300 px-20">
        <ul className='list1'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>

      <div className='form1'>
        <form className='from px-40px py-80px mt-18 bg-yellow-200 p-8'>
          fgffgvds
        </form>
      </div>


    </main>
  );
}