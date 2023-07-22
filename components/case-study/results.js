/*
 Copyright (c) 2022, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Next imports
import Image from 'next/image';

// Components imports
import Separator from '../separator';
import maskFull from '../../public/images/case-studies/mask-lg.png';

const Results = ({ title, results, lineText }) => {
  return (
    <>
      <div className='col-lg-6 mt-5 m-auto'>
        <h2>{title}</h2>
        <div className='my-5 row'>
          {results.map((result, index) => (
            <div
              key={index}
              className='col-lg-4 col-md-4 col-sm-12 pe-lg-6 pe-md-6 pe-sm-0'
            >
              <div className='mx-auto mb-2'>
                <Image
                  src={result.img}
                  alt={`image ${index}`}
                />
              </div>
              <p dangerouslySetInnerHTML={{ __html: result.text }} />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-4 star-list-item row'>
        <li className='col-lg-8 col-md-8 col-sm-12 mask-p'>
          <p className='pt-3 fst-italic '>{lineText}</p>
        </li>
        <div className='col-lg-4 col-md-4 text-end mask-img'>
          <Image
            src={maskFull}
            alt='mask-img'
          />
        </div>
      </div>
      <div className='col-lg-6 mt-5 m-auto'>
        <Separator classes='line' />
      </div>
    </>
  );
};

export default Results;
