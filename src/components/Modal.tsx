import React, { useEffect, useState } from "react";
import { ModalProps, FormValuesModal } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faUser,
  faBuildingColumns,
  faCreditCard,
  faMugHot,
  faCalendarDays,
  faXmark,
  faCakeCandles,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import {
  ModalOverlay,
  ModalContent,
  InputGroup,
  StyledIcon,
  InputDiv,
  StyledInput,
  PaymentSelection,
  TypeDiv,
  PaymentInput,
  PaymentLabel,
  PaymentIcon,
  CardDiv,
  SharedInput,
  ExitDiv,
  ExitButton,
  FormButton,
  StyledSvg,
  SvgDiv,
  ErrorDiv,
  ErrorP,
  FlexD,
} from "./components.styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalContent = document.getElementById("modal-content");
      if (modalContent && !modalContent.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "visible";
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePaymentMethodChange = () => {
    setPaymentMethod(true);
    setCreditCard(true);
  };

  const handlePaypalMethod = () => {
    setPaymentMethod(true);
    setCreditCard(false);
  };

  const initialValues: FormValuesModal = {
    name: "",
    birthDate: "",
    email: "",
    address: "",
    city: "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvc: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string(),
    birthDate: Yup.string().matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Invalid date format (DD/MM/YY)"
    ),
    email: Yup.string().email("Invalid Email"),
    address: Yup.string(),
    city: Yup.string(),
    cardName: Yup.string(),
    cardNumber: Yup.number().typeError("Card Number must be a valid number"),
    expDate: Yup.string().matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Invalid date format (MM/YY)"
    ),
    cvc: Yup.number().typeError("Invalid Number"),
  });

  const handleSubmit = (values: FormValuesModal) => {
    console.log(values);
    setSubmitted(true);
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
    }, 2500);

    setTimeout(() => {
      setCompleted(true);
      onClose();
    }, 4500);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ModalOverlay>
      <ModalContent id="modal-content">
        <ExitDiv>
          <ExitButton onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </ExitButton>
        </ExitDiv>
        <h1>Thanks for choosing us!</h1>

        {submitted && !completed && (
          <>
            {processing ? (
              <SvgDiv>
                <StyledSvg
                  viewBox="0 -56.62 343.92 343.92"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="a"
                    d="m288.4 120.15c28.9 10.669 70.7 34.472 45.321 65.294-22.824 27.72-71.873 36.684-105.49 39.973-10.053 0.984-43.336 2.88-56.266 3.013-12.926-0.133-46.212-2.029-56.265-3.013-33.618-3.289-82.667-12.253-105.49-39.973-29.929-36.349 33.577-62.936 59.16-69.731z"
                  />
                  <path
                    className="b"
                    d="M312.658,134.09c14.409,8.5,33.332,23.89,23.945,42.648-4.032,8.06-11.188,14.6-18.494,19.69a112.3,112.3,0,0,1-23.7,12.333c-17.109,6.63-35.3,10.4-53.452,12.8-14.993,1.982-30.1,2.8-45.2,3.568-7.577.387-15.162.766-22.749.886-7.121.113-14.284-.37-21.394-.715-15.046-.73-30.133-1.467-45.094-3.29C88.374,219.8,70.2,216.27,52.973,210.05c-15.907-5.743-32.828-14.41-42.811-28.6-3.874-5.508-6.368-12.185-5.038-18.874,1.274-6.412,5.232-11.846,9.805-16.358,10.8-10.656,25.295-17.675,39.318-23.034q4.617-1.765,9.325-3.271c2.931-.937,1.678-5.573-1.276-4.629-14.87,4.755-29.747,11.228-42.381,20.5C8.525,144.15-2.59,156.554.534,171.78c1.677,8.17,7.159,15.155,13.043,20.809a91.031,91.031,0,0,0,22.481,15.442c17.211,8.61,36.181,13.416,55.082,16.572a438.739,438.739,0,0,0,47.1,4.781c15.434.893,30.81,1.7,46.265,1.066,15.678-.647,31.436-1.318,47.047-2.975,18.578-1.973,37.179-5.113,54.993-10.855C303.985,211,321.754,202.687,334.08,188.7c6.619-7.508,11.289-16.824,9.424-27.038-1.7-9.321-8.48-17.027-15.585-22.854a101.347,101.347,0,0,0-12.839-8.867c-2.666-1.573-5.084,2.575-2.422,4.145Z"
                  />
                  <path
                    className="c"
                    d="M175.707,200.57c-14.039-2.17-33.227-7.966-47.094-6.744-14.584,1.285-25.761,11.638-40.843,11.87-15.4.236-33.878-8.15-37.757-23.717-4.278-17.165,17.185-24.245,30.22-22.9,15.976,1.653,26.648,8.891,39.449,17.912,2.771,2.055,6.952,2.1,10.141,2.292,14.7.869,29.854,1.594,44.416,1.651,15.733.062,32.858.067,48.541.166,11.91.075,34.82-3.074,30.775,15.811-3.4,15.892-20.3,14.514-33.872,12.371C204.275,206.852,175.952,200.608,175.707,200.57Z"
                  />
                  <path
                    className="b"
                    d="M176.345,198.256c-8.683-1.357-17.22-3.512-25.87-5.06-8.457-1.513-17.28-2.79-25.823-1.232-8.348,1.522-15.8,5.76-23.711,8.611a41.508,41.508,0,0,1-12.352,2.7,41.784,41.784,0,0,1-10.636-.98c-6.907-1.518-13.7-4.567-18.824-9.523a25.213,25.213,0,0,1-5.675-8.011,20.36,20.36,0,0,1-1.469-5.1,16.093,16.093,0,0,1-.126-1.971,14.484,14.484,0,0,1,.13-1.925,12.565,12.565,0,0,1,3.444-6.707,21.831,21.831,0,0,1,6.846-4.655,35.417,35.417,0,0,1,16.747-3.017c8.229.51,16.247,3.354,23.431,7.289,3.771,2.065,7.378,4.417,10.923,6.845,1.806,1.237,3.56,2.568,5.393,3.763a14.868,14.868,0,0,0,6.274,2.03c4.833.635,9.794.675,14.659.93q7.886.414,15.775.7c10.454.372,20.907.406,31.366.433q15.547.041,31.094.1c5.938.03,11.9-.273,17.832-.084a36.486,36.486,0,0,1,7.627.851c.59.137,1.177.293,1.755.476.28.088.559.182.835.284.136.049.271.1.407.154.421.161-.13-.065.117.049a14.924,14.924,0,0,1,1.39.714c.234.138.459.288.686.436.555.364-.023-.089.463.355.367.335.708.68,1.04,1.049.364.405-.057-.171.22.3.152.26.322.507.464.773.06.112.375.823.19.361.106.263.2.533.279.805s.155.57.216.859c.031.149.058.3.083.45.074.437,0-.092.021.184a16.762,16.762,0,0,1-1.688,8.874c-2.65,5.254-8.026,7.269-13.68,7.688-6.5.482-12.88-.552-19.216-1.637-12.709-2.176-25.335-4.863-37.936-7.582-.9-.194-1.8-.419-2.7-.582a2.466,2.466,0,0,0-2.952,1.676,2.421,2.421,0,0,0,1.676,2.952c3.549.642,7.07,1.524,10.6,2.268,7.189,1.516,14.387,2.993,21.6,4.364a200.626,200.626,0,0,0,20.818,3.232c6.514.538,13.786.383,19.547-3.1,5.943-3.6,9.226-10.922,8.758-17.784a12.537,12.537,0,0,0-3.1-7.716,15.229,15.229,0,0,0-6.651-3.985c-5.367-1.76-11.3-1.683-16.882-1.575-8.1.157-16.2.068-24.308.043-21.691-.068-43.35-.025-65.019-1.149-4.907-.254-9.941-.249-14.815-.892a12.186,12.186,0,0,1-5.758-2.391c-1.9-1.333-3.8-2.659-5.722-3.953-7.306-4.912-15.038-9.289-23.573-11.656a46.916,46.916,0,0,0-22-1.182c-6.15,1.241-12.586,3.9-16.877,8.631-4.749,5.237-5.65,12.212-3.329,18.786,2.59,7.339,8.192,13.088,14.854,16.931a48.666,48.666,0,0,0,22.3,6.318c9.085.344,17.294-2.939,25.488-6.449a83.477,83.477,0,0,1,12.073-4.4,41.716,41.716,0,0,1,12.417-1.089c9.167.428,18.2,2.517,27.148,4.387,4.127.862,8.257,1.718,12.423,2.368a2.475,2.475,0,0,0,2.952-1.676A2.418,2.418,0,0,0,176.345,198.256Z"
                  />
                  <path
                    className="b"
                    d="M63.425,189.258a27.683,27.683,0,0,0,7.784,6.5,24.638,24.638,0,0,0,10.112,2.761,2.4,2.4,0,1,0,0-4.8,19.734,19.734,0,0,1-7.888-2.214,21.243,21.243,0,0,1-1.829-1.134q-.187-.13-.374-.265c.014.01-.493-.368-.31-.227.2.154-.263-.211-.3-.244q-.227-.186-.448-.376a31.076,31.076,0,0,1-3.35-3.4,2.421,2.421,0,0,0-3.394,0,2.448,2.448,0,0,0,0,3.394Z"
                  />
                  <path
                    className="b"
                    d="M89.159,198.349A12.925,12.925,0,0,0,93,197.9a21.724,21.724,0,0,0,3.189-1.013,2.627,2.627,0,0,0,1.434-1.1,2.4,2.4,0,0,0-.861-3.283,2.321,2.321,0,0,0-1.849-.242,19.9,19.9,0,0,1-4.74,1.3l.638-.086a8.176,8.176,0,0,1-1.647.07,2.4,2.4,0,0,0-1.7,4.1,2.658,2.658,0,0,0,1.7.7Z"
                  />
                  <path
                    className="b"
                    d="M221.386,203.514A65.984,65.984,0,0,0,232.7,204.6c3.182-.033,6.613-.408,9.385-2.1,2.633-1.606.224-5.759-2.423-4.145-.253.155-.513.289-.774.428q-.382.174-.059.036-.22.087-.444.165a13.773,13.773,0,0,1-1.945.51,22.689,22.689,0,0,1-4.043.307,59.625,59.625,0,0,1-9.733-.913,2.473,2.473,0,0,0-2.953,1.676,2.419,2.419,0,0,0,1.677,2.952Z"
                  />
                  <path
                    className="a"
                    d="M88.775,152.806C68.263,123.689,61.119,86.637,60.324,51.615c-.091-4-.074-8.086,1.169-11.892,2.175-6.66,10.379-12.99,16.479-16.436C93.281,14.638,120.809,6.145,144.942,3.9c9.386-.873,18.347-1.385,27.111-1.515,8.766.13,17.726.642,27.111,1.515a178.186,178.186,0,0,1,50.609,11.848c11.066,4.44,25.487,10.466,31.26,21.62,3.258,6.3,3.411,13.74,2.668,20.79-4.256,40.389-11.624,83.877-44.049,112.013Z"
                  />
                  <path
                    className="d"
                    d="m96.419 54.439a51.772 51.772 0 0 1-5.67-2.85c10.19-14.55 48.692-17.091 64.305-17.829 17.48-0.827 38.036-0.672 58.481 2.252 8.172 1.168 38.383 8.76 40.207 19.2a182.79 182.79 0 0 1-50.609 11.849q-13.543 1.26-27.111 1.275-13.554-0.035-27.111-1.275a182.77 182.77 0 0 1-50.611-11.845c-0.562-0.216-1.2-0.482-1.881-0.777z"
                  />
                  <path
                    className="a"
                    d="M326.481,94.6c-2.756,17.382-17.582,31.83-31.66,40.274-9,5.4-39.307,21.376-41.839,22.308,0,0-.553.2-1.467.546,8.236-10.355,14.584-22.47,19.39-35.354l.882-.368c10.137-4.2,22.562-11.443,26.981-22.385,4.115-10.187-7.3-22.222-18.288-13.717,1.3-7.61,2.2-15.184,2.77-22.533l.794-.209c9.61-2.529,20.736-2.521,29.249,1.694,7.338,3.634,12.734,10.395,13.545,21.352A36.351,36.351,0,0,1,326.481,94.6Z"
                  />
                  <path
                    className="b"
                    d="M84.433,38.039a7.5,7.5,0,0,0-2.982,6.207,9.5,9.5,0,0,0,3.3,5.932c3.525,3.292,8.094,5.418,12.523,7.2A181.266,181.266,0,0,0,141.946,68.7a276.2,276.2,0,0,0,48.373,1.675c15.775-.775,31.48-2.789,46.718-7.035q6.3-1.757,12.465-3.973a60.834,60.834,0,0,0,9.211-3.8,12.111,12.111,0,0,0,5.643-5.884c1.24-3.146.178-6.519-1.477-9.29-1.582-2.649-5.734-.238-4.144,2.423a9.33,9.33,0,0,1,1.353,3.381,3.477,3.477,0,0,1-.452,2.309,9.179,9.179,0,0,1-4.055,3.3,62.706,62.706,0,0,1-7.355,2.942Q243.162,56.56,238,58.073a197.865,197.865,0,0,1-42.746,7.218c-29.444,1.935-59.754.132-87.879-9.318-5.8-1.947-10.951-3.68-16.074-6.858a20.826,20.826,0,0,1-2.754-1.972,8.553,8.553,0,0,1-1.96-2.225,5.248,5.248,0,0,1-.252-.489c.206.474-.071-.32-.1-.419-.161-.65.042.493-.012-.168a3.933,3.933,0,0,1,.013-.406q-.06.4-.006.128c.046-.172.086-.343.149-.512-.162.436.224-.364.286-.455a7.891,7.891,0,0,1,1.163-1.164,2.421,2.421,0,0,0,0-3.394,2.45,2.45,0,0,0-3.394,0Z"
                  />
                  <path
                    className="b"
                    d="M90.847,151.6a144.265,144.265,0,0,1-20.51-44.564,220.459,220.459,0,0,1-7.386-48.8,101.892,101.892,0,0,1-.124-12.864,17.347,17.347,0,0,1,3.92-10.014C71.266,29.9,77.416,26.074,83.7,22.982c14.255-7.008,29.963-11.477,45.527-14.425a216.959,216.959,0,0,1,26.4-3.105,239.992,239.992,0,0,1,27.613-.3c18.506.922,36.88,3.195,54.588,8.847a167.2,167.2,0,0,1,21.759,8.578c6.253,3.016,12.539,6.7,16.929,12.2,5.094,6.387,5.6,14.687,4.865,22.514-.688,7.342-1.611,14.68-2.691,21.974-2.193,14.809-5.278,29.57-10.442,43.651-5.049,13.77-12.287,26.842-22.226,37.7a100.008,100.008,0,0,1-8.074,7.861c-2.333,2.032,1.074,5.416,3.395,3.394A109.04,109.04,0,0,0,268.6,134.652c6.392-14.033,10.373-29,13.1-44.145,1.386-7.692,2.46-15.438,3.383-23.2.981-8.24,2.352-16.74.352-24.937-3.78-15.494-19.742-22.743-33.181-28.2a189,189,0,0,0-54.564-12.81A252.991,252.991,0,0,0,169.047.045c-9.507.234-19.064.781-28.507,1.929A198.341,198.341,0,0,0,90.687,14.681c-6.625,2.664-13.268,5.644-19.08,9.842a42.944,42.944,0,0,0-8.84,8.166,22.113,22.113,0,0,0-4.628,11.528A83.721,83.721,0,0,0,58.114,57.4q.278,6.455.863,12.891a231.771,231.771,0,0,0,3.692,25.356c3.411,16.639,8.951,32.967,17.338,47.781q3.088,5.456,6.7,10.59a2.464,2.464,0,0,0,3.283.861,2.421,2.421,0,0,0,.861-3.284Z"
                  />
                  <path
                    className="b"
                    d="M92.943,52.629c.064-.087.128-.175.193-.262.226-.3-.213.262.029-.03.141-.17.282-.34.428-.506q.52-.593,1.089-1.14a18.65,18.65,0,0,1,2.147-1.813,36.789,36.789,0,0,1,6.074-3.492,76.433,76.433,0,0,1,15.03-4.817,196.314,196.314,0,0,1,31.489-4.1,350.418,350.418,0,0,1,43.346-.145,185.531,185.531,0,0,1,21.992,2.315A118.414,118.414,0,0,1,227.225,41.7a90.186,90.186,0,0,1,14.311,5.411,40.576,40.576,0,0,1,5.969,3.557,2.423,2.423,0,0,1,.337.261c.173.142.346.284.515.431.378.327.744.667,1.092,1.025q.456.468.866.977c.171.213-.068-.083-.083-.1.073.1.151.2.217.307.115.182.235.358.343.544s.194.367.294.549c.217.4-.108-.36.031.063a8.635,8.635,0,0,1,.31,1.131,2.423,2.423,0,0,0,2.953,1.676,2.452,2.452,0,0,0,1.676-2.953c-.791-4.187-4.65-7.22-8.042-9.356a69.782,69.782,0,0,0-14.544-6.554A130.162,130.162,0,0,0,219.1,34.631a146.719,146.719,0,0,0-18.312-2.5,336.26,336.26,0,0,0-48.386-.638,228.31,228.31,0,0,0-32.181,3.69,92.611,92.611,0,0,0-16.468,4.649c-4.6,1.844-9.172,4.163-12.713,7.7a22.478,22.478,0,0,0-2.246,2.67,2.417,2.417,0,0,0,.861,3.283,2.455,2.455,0,0,0,3.284-.861Z"
                  />
                  <path
                    className="b"
                    d="M284.682,65.478c9.245-2.406,20.067-2.639,28.49,2.024a20.823,20.823,0,0,1,9.318,10.243,31.112,31.112,0,0,1,1.4,17.773c-2.652,13.154-12.092,24.134-22.534,32.052-7.943,6.023-17.031,10.537-25.788,15.234-7.557,4.054-15.1,8.248-22.863,11.9-.171.08-.344.155-.513.237-.513.247.591-.231.155-.067a2.467,2.467,0,0,0-1.676,2.952,2.418,2.418,0,0,0,2.952,1.677,76.218,76.218,0,0,0,7.81-3.824q6.912-3.562,13.769-7.234c4.753-2.536,9.5-5.093,14.206-7.709a127.674,127.674,0,0,0,12.6-7.708c11.5-8.261,22.011-19.579,25.869-33.525,3.353-12.121,1.177-26.412-9.385-34.276-8.775-6.533-20.834-7.154-31.232-5.233-1.292.239-2.574.528-3.846.859-2.987.778-1.72,5.409,1.276,4.629Z"
                  />
                  <path
                    className="b"
                    d="M281.693,87.978c3.011-2.275,6.709-3.413,10.075-1.712a10.264,10.264,0,0,1,5.373,7.5c.577,3.886-1.572,7.612-3.868,10.625a39.33,39.33,0,0,1-9.477,8.589,73.212,73.212,0,0,1-12.647,6.71,2.48,2.48,0,0,0-1.676,2.952,2.414,2.414,0,0,0,2.952,1.676c9.36-3.9,18.665-9.139,24.886-17.361,2.919-3.859,5.219-8.541,4.59-13.493a15.05,15.05,0,0,0-7.068-10.992c-5-2.987-11.036-2.062-15.563,1.357a2.478,2.478,0,0,0-.861,3.284,2.417,2.417,0,0,0,3.284.861Z"
                  />
                </StyledSvg>
                <h3>
                  Procesing
                  <span className={processing ? "loading" : " "} />
                </h3>
              </SvgDiv>
            ) : (
              <SvgDiv>
                <h2>Order completed! Check your email.</h2>
              </SvgDiv>
            )}
          </>
        )}

        {!submitted && (
          <>
            <p>
              Once the payment has been processed, we will promptly send you an
              email containing all the relevant course information, including
              contact details and any additional materials related to the
              course.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <h2>Personal Details</h2>

              <InputGroup>
                <SharedInput>
                  <CardDiv secondary separated>
                    <StyledIcon
                      icon={faUser}
                      className={
                        formik.errors.name && formik.touched.name ? "error" : ""
                      }
                    />
                    <StyledInput
                      type="text"
                      {...formik.getFieldProps("name")}
                      placeholder="Full Name"
                      className={
                        formik.errors.name && formik.touched.name ? "error" : ""
                      }
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.name && formik.errors.name && (
                      <ErrorDiv>
                        <ErrorP>{formik.errors.name}</ErrorP>
                      </ErrorDiv>
                    )}
                  </CardDiv>
                  <CardDiv filler>
                    <StyledIcon
                      icon={faCakeCandles}
                      className={
                        formik.errors.birthDate && formik.touched.birthDate
                          ? "error"
                          : ""
                      }
                    />
                    <StyledInput
                      className={
                        formik.errors.birthDate && formik.touched.birthDate
                          ? "error"
                          : ""
                      }
                      type="text"
                      placeholder="Birth Date (DD/MM/YY)"
                      maxLength={8}
                      {...formik.getFieldProps("birthDate")}
                      required
                      onChange={formik.handleChange}
                      value={formik.values.birthDate}
                    />
                    {formik.touched.birthDate && formik.errors.birthDate && (
                      <ErrorDiv>
                        <ErrorP>{formik.errors.birthDate}</ErrorP>
                      </ErrorDiv>
                    )}
                  </CardDiv>
                </SharedInput>
              </InputGroup>

              <InputGroup>
                <InputDiv>
                  <StyledIcon
                    icon={faEnvelope}
                    className={
                      formik.errors.email && formik.touched.email ? "error" : ""
                    }
                  />
                  <StyledInput
                    className={
                      formik.errors.email && formik.touched.email ? "error" : ""
                    }
                    type="email"
                    placeholder="Email Address"
                    required
                    {...formik.getFieldProps("email")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <ErrorDiv>
                      <ErrorP>{formik.errors.email}</ErrorP>
                    </ErrorDiv>
                  )}
                </InputDiv>
              </InputGroup>

              <InputGroup>
                <InputDiv>
                  <StyledIcon
                    icon={faLocationDot}
                    className={
                      formik.errors.address && formik.touched.address
                        ? "error"
                        : ""
                    }
                  />
                  <StyledInput
                    className={
                      formik.errors.address && formik.touched.address
                        ? "error"
                        : ""
                    }
                    type="text"
                    placeholder="Address"
                    required
                    {...formik.getFieldProps("address")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <ErrorDiv>
                      <ErrorP>{formik.errors.address}</ErrorP>
                    </ErrorDiv>
                  )}
                </InputDiv>
              </InputGroup>

              <InputGroup>
                <InputDiv>
                  <StyledIcon
                    icon={faBuildingColumns}
                    className={
                      formik.errors.city && formik.touched.city ? "error" : ""
                    }
                  />
                  <StyledInput
                    className={
                      formik.errors.city && formik.touched.city ? "error" : ""
                    }
                    type="text"
                    placeholder="City"
                    required
                    {...formik.getFieldProps("city")}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <ErrorDiv>
                      <ErrorP>{formik.errors.city}</ErrorP>
                    </ErrorDiv>
                  )}
                </InputDiv>
              </InputGroup>

              <InputGroup></InputGroup>
              <PaymentSelection>
                <h4>Billing Details</h4>

                <TypeDiv>
                  <PaymentInput
                    type="radio"
                    name="pay"
                    id="bc1"
                    value="creditCard"
                    onClick={handlePaymentMethodChange}
                  />
                  <PaymentLabel htmlFor="bc1">
                    <span>
                      <PaymentIcon icon={faCcVisa} />
                      <PaymentIcon icon={faCcMastercard} />
                      Credit Card
                    </span>
                  </PaymentLabel>
                  <PaymentInput
                    type="radio"
                    name="pay"
                    id="bc2"
                    value="paypal"
                    onClick={handlePaypalMethod}
                  />
                  <PaymentLabel htmlFor="bc2">
                    <span>
                      <PaymentIcon icon={faCcPaypal} />
                      Paypal
                    </span>
                  </PaymentLabel>
                </TypeDiv>
              </PaymentSelection>

              {paymentMethod && (
                <div>
                  {creditCard ? (
                    <>
                      <InputGroup>
                        <InputDiv>
                          <StyledIcon
                            icon={faUser}
                            className={
                              formik.errors.cardName && formik.touched.cardName
                                ? "error"
                                : ""
                            }
                          />
                          <StyledInput
                            className={
                              formik.errors.cardName && formik.touched.cardName
                                ? "error"
                                : ""
                            }
                            type="text"
                            placeholder="Name on Card"
                            required
                            {...formik.getFieldProps("cardName")}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardName}
                          />
                          {formik.touched.cardName &&
                            formik.errors.cardName && (
                              <ErrorDiv>
                                <ErrorP>{formik.errors.cardName}</ErrorP>
                              </ErrorDiv>
                            )}
                        </InputDiv>
                      </InputGroup>

                      <InputGroup>
                        <SharedInput>
                          <CardDiv primary separated>
                            <StyledIcon
                              icon={faCreditCard}
                              className={
                                formik.errors.cardNumber &&
                                formik.touched.cardNumber
                                  ? "error"
                                  : ""
                              }
                            />
                            <StyledInput
                              className={
                                formik.errors.cardNumber &&
                                formik.touched.cardNumber
                                  ? "error"
                                  : ""
                              }
                              type="tel"
                              placeholder="Card Number"
                              required
                              {...formik.getFieldProps("cardNumber")}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.cardNumber}
                              maxLength={16}
                              minLength={16}
                            />
                            {formik.touched.cardNumber &&
                              formik.errors.cardNumber && (
                                <ErrorDiv>
                                  <ErrorP>{formik.errors.cardNumber}</ErrorP>
                                </ErrorDiv>
                              )}
                          </CardDiv>
                          <FlexD>
                            <CardDiv filler separated>
                              <StyledIcon
                                icon={faCalendarDays}
                                className={
                                  formik.errors.expDate &&
                                  formik.touched.expDate
                                    ? "error"
                                    : ""
                                }
                              />
                              <StyledInput
                                className={
                                  formik.errors.expDate &&
                                  formik.touched.expDate
                                    ? "error"
                                    : ""
                                }
                                type="text"
                                placeholder="MM/YY"
                                pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                                maxLength={5}
                                required
                                {...formik.getFieldProps("expDate")}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.expDate}
                              />
                              {formik.touched.expDate &&
                                formik.errors.expDate && (
                                  <ErrorDiv>
                                    <ErrorP>{formik.errors.expDate}</ErrorP>
                                  </ErrorDiv>
                                )}
                            </CardDiv>
                            <CardDiv filler>
                              <StyledIcon
                                icon={faCheck}
                                className={
                                  formik.errors.cvc && formik.touched.cvc
                                    ? "error"
                                    : ""
                                }
                              />
                              <StyledInput
                                className={
                                  formik.errors.cvc && formik.touched.cvc
                                    ? "error"
                                    : ""
                                }
                                type="text"
                                placeholder="CVC"
                                maxLength={3}
                                required
                                {...formik.getFieldProps("cvc")}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cvc}
                              />
                              {formik.touched.cvc && formik.errors.cvc && (
                                <ErrorDiv>
                                  <ErrorP>{formik.errors.cvc}</ErrorP>
                                </ErrorDiv>
                              )}
                            </CardDiv>
                          </FlexD>
                        </SharedInput>
                      </InputGroup>
                    </>
                  ) : (
                    <p>
                      Here goes paypal features{" "}
                      <FontAwesomeIcon icon={faMugHot} />
                    </p>
                  )}
                </div>
              )}

              <InputGroup>
                <FormButton type="submit">Pay Now</FormButton>
              </InputGroup>
            </form>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
