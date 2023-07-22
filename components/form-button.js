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

//Form Button Component

function FormButton({ label}) {
    return(
        <button className="btn white-btn mt-lg-3 my-sm-0" id="Xplore" type="submit"> {label} <svg className="ps-1 ms-1" width="23" height="20" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9432 9.79765C20.8395 9.79765 20.7359 9.79765 20.6329 9.79765C14.2531 9.79765 7.8729 9.79765 1.49319 9.79765C1.28009 9.79765 1.03922 9.83404 1.00237 9.5105C0.978331 9.29556 1.13696 9.20344 1.50067 9.20344C7.86275 9.20344 14.2248 9.20344 20.5869 9.20345C20.7076 9.20345 20.8278 9.20345 20.9485 9.20345C20.9784 9.15796 21.0089 9.11247 21.0388 9.06698C20.9448 9.01353 20.8321 8.98055 20.76 8.90378C18.3437 6.33819 15.9318 3.76861 13.5188 1.1996C13.2346 0.897098 13.186 0.736179 13.3559 0.589477C13.6101 0.370559 13.7586 0.601985 13.9119 0.765748C16.5385 3.56163 19.1646 6.35866 21.7902 9.15568C22.0717 9.45534 22.0706 9.54689 21.7827 9.85337C19.1572 12.6504 16.531 15.4469 13.9044 18.2439C13.6405 18.5248 13.4942 18.5674 13.3457 18.4071C13.1983 18.2484 13.2384 18.1006 13.507 17.814C15.9195 15.245 18.332 12.6754 20.7466 10.1081C20.8209 10.0291 20.9207 9.97676 21.0083 9.91194C20.987 9.87441 20.9651 9.83575 20.9432 9.79765Z" fill="white" stroke="#6F63DE"/>
        </svg>
        </button>
    );
}

export default FormButton;