import React from 'react'
import KeywordIndicator from './KeywordIndicator'
import './FirstComponent.css'
import infoIcon from './imgs/Info-icon.png'
import { useState } from 'react'


function FirstComponent() {

  const [keyword ,setKeyword] =useState('');

  const basic = () =>{
    <div>asd</div>
  }

  return (
    <div className='background_color'>
    <div className='mane_div'>
      <div className='div_List'>
          <ul>
            <li className='list'><button>BASIC INFROMATION</button></li>
            <li className='list'><button>ATTRIBUTES</button></li>
            <li className='list'><button>PRICE & DELIVIRY</button></li>
            <li className='list'><button>DESCRIPTIONS</button></li>
            <li className='list'><button>SPECIFICATIONS</button></li>
            <div className='line'></div>
          </ul>
      </div>
      <div className="links">
          <input type='text' required="required" className="border"></input>
          <span className='spann'>Product Titles</span>
          <img className='info-Icon' src={infoIcon} alt="info_icon"></img>
          <p className='info-Text'>hint text about the title</p>
      </div>
      
      <div className='border'>
        
      <select class="form-select form-select-lg mb-3 shadow-none" aria-label=".form-select-lg example">
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
          </select>
          
          <select class="form-select form-select-lg mb-3 shadow-none" aria-label=".form-select-lg example">
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
          </select>
          </div>
          <p className='selector-first-text'>categories</p>
          <p className='selector-secound-text'>sub-categories</p>
          <img className='info-Icon2' src={infoIcon} alt="info_icon"></img>
          <p className='info-Text2'>hint text about the title</p>

          
            <div className='indictor'>
            <div className='form-group mb-1'>
                <input type="text"className='form-control shadow-none' onChange={e => setKeyword(e.target.value)}> 
                 </input>
            </div>
            </div>
            <p className='keyword_text1'>keywords</p>
            <div className='KeywordIndicator'>
                <KeywordIndicator keyword={keyword}/>
            </div>
            <p className='keyword_text2'>keyword Quality</p>
            <p className='keyword_text3'>Excellent</p>


            <div className='div-imageuploader'>
              
            <svg className='imageuploader' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
</svg>

              
            </div>

            

            {/* <p className='imageuploader-text'>image product</p> */}
            <div className='imageuploader-border'></div>

<div className='upload_folder'>
            <input type="file" name="file" id="file" class="inputfile" />
            <label label for="file">image product</label>
            </div>
            <div className='footer'>
                  <span className='line'></span>
            </div>
            <button className='footer-button-next'>NEXTSTEP</button>
            <button className='footer-button-cancle'>CANCEL</button>
    </div>
    </div>
  )
}

export default FirstComponent