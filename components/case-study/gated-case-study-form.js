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

//React imports
import React, { useRef, useState, useEffect } from 'react';

// Third party imports
import emailjs from '@emailjs/browser';

// Helpers import
import { downloadFile } from '../../helpers/files';

// Constants import
import constants from '../../constants/constants';

/**
 * Component to display a form on the hero section which retrieves information from the user and downloads the case study
 * @param {string} buttonLink
 * @param {string} btnClasses
 * @param {string} caseStudyFileName
 * @returns Component
 */
const CaseStudyForm = ({ buttonLink, btnClasses, caseStudyFileName }) => {
  const form = useRef();
  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [fullNameError, setFullNameError] = useState(false);
  const [jobTitleError, setJobTitleError] = useState(false);
  const [businessEmailError, setBusinessEmailError] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(true);
  useEffect(() => {
    validatInputs() ? setIsFormInvalid(true) : setIsFormInvalid(false);
  }, [businessEmail, fullName, jobTitle]);

  /**
   * Function to update field on change
   * @param {Function} setFieldError
   * @param {Function} setFieldValue
   * @param {Event} event
   */
  const onChangeField = (event, setFieldError, setFieldValue) => {
    if (event.target.name === constants.formInputTypes.businessEmail) {
      setFieldError(false);
      if (!verifyEmail(event.target.value)) {
        setFieldError(true);
      }
    } else if (event.target.name === constants.formInputTypes.fullName) {
      setFieldError(false);
      if (!ifOnlyAlphabets(event.target.value)) {
        setFieldError(true);
      }
    } else {
      setFieldError(false);
      if (!isAlphanumeric(event.target.value)) {
        setFieldError(true);
      }
    }
    setFieldValue(event.target.value);
  };

  /**
   * Function to validate inputs
   */
  const validatInputs = () => {
    return !businessEmail ||
      !verifyEmail(businessEmail) ||
      !fullName ||
      !ifOnlyAlphabets(fullName) ||
      !jobTitle ||
      !isAlphanumeric(jobTitle)
      ? true
      : false;
  };

  /**
   * Function to verify business email
   * @param {String} businessEmail
   */
  const verifyEmail = (businessEmail) => {
    return (
      businessEmail?.toLowerCase().match(constants.regex.emailValidation) &&
      businessEmail
        ?.toLowerCase()
        .match(constants.regex.businessDomainlValidation)
    );
  };

  /**
   * Function to verify string that has only letters
   * @param {String} value
   * @returns boolean value
   */
  const ifOnlyAlphabets = (value) => {
    return value?.toLowerCase().match(constants.regex.letterValidation);
  };

  /**
   * Function to verify string that has only letters or alphanumerics
   * @param {String} value
   * @returns boolean value
   */
  const isAlphanumeric = (value) => {
    return (
      value?.toLowerCase().match(constants.regex.alphanumericValidation)
    );
  };

  /**
   * Mails the information entered, to the recipents and downloads the case study
   * @param {Event} event
   */
  const sendEmail = (event) => {
    event.preventDefault();
    if (!isFormInvalid) {
      downloadFile(buttonLink, caseStudyFileName);
      emailjs
        .sendForm(
          constants.emailjsCredentials.serviceKey,
          constants.emailjsCredentials.templateKey,
          form.current,
          constants.emailjsCredentials.publicKey
        )
        .then(
          () => {
            setFullName('');
            setJobTitle('');
            setBusinessEmail('');
          },
          (error) => {
            // TODO: will update later
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className='form-box' onSubmit={sendEmail}>
      <h5 className='form-heading'>Download This Success Story Now!</h5>
      <form ref={form}>
        <div className='form-group pb-3 f-inter-reg'>
          <label for='name'>Full Name</label>
          <input
            type='text'
            class='form-control'
            id='name'
            name='fullName'
            value={fullName}
            onChange={(event) => {
              onChangeField(event, setFullNameError, setFullName);
            }}
          />
          {fullNameError ? (
            <small class='text-danger'>
              Please input alphabet characters only
            </small>
          ) : null}
        </div>
        <div class='form-group pb-3 f-inter-reg'>
          <label>Job Title</label>
          <input
            type='text'
            class='form-control'
            id='jobTitle'
            name='jobTitle'
            value={jobTitle}
            onChange={(event) => {
              onChangeField(event, setJobTitleError, setJobTitle);
            }}
          />
          {jobTitleError ? (
            <small class='text-danger'>
              Please input alphanumeric characters only
            </small>
          ) : null}
        </div>
        <div class='form-group pb-3 f-inter-reg'>
          <label>Business Email</label>
          <input
            type='email'
            class='form-control'
            id='businessEmail'
            name='businessEmail'
            value={businessEmail}
            onChange={(event) => {
              onChangeField(event, setBusinessEmailError, setBusinessEmail);
            }}
          />
          {businessEmailError ? (
            <small class='text-danger'>Please input business email</small>
          ) : null}
        </div>
        <div class='form-group d-none'>
          <input
            class='form-control'
            id='fileName'
            name='fileName'
            value={caseStudyFileName}
          />
        </div>
        <div className='explore-btn-mob'>
          <button
            className={ `${btnClasses} f-inter-reg`}
            id='xplore'
            type='submit'
            style={{
              color: constants.colors.darkGrey,
            }}
            disabled={isFormInvalid}
          >
            Download
          </button>
        </div>
      </form>
    </div>
  );
};

export default CaseStudyForm;
