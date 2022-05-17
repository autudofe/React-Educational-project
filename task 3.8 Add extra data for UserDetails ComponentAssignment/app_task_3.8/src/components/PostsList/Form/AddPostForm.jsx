import React from "react";
import { useForm } from "react-hook-form";

import "./Form.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../../reducers/actions/actions";
import classNames from "classnames";

const AddPostForm = ({ visible, setVisible }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      addPost({
        userId: 1,
        id: Date.now(),
        ...data,
      })
    );
    setVisible(false);
  };

  return (
    <div className={classNames("modal", { modalActive: visible })}>
      <div className="formContainer">
        <p onClick={() => setVisible(false)} className="close">
          Close X
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={"inputForm"}
            placeholder="Your title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
          <textarea
            rows={5}
            placeholder="Your text body"
            {...register("body")}
          />
          <button className={"buttonForm"} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
