import React from "react";
import { Formik, Field, Form } from "formik";

const PostItForm = ({ onSubmit, currentPostIt }) => (
  <div>
    <Formik
      initialValues={{ ...currentPostIt }}
      enableReinitialize="true"
      onSubmit={(values, { resetForm }) => {
        if (!values.title || !values.description) {
          alert("Fill both title and description to continue");
          return;
        }
        onSubmit({
          title: values.title,
          description: values.description,
          index: values.index,
          inBoard: values.inBoard,
          type: values.type,
        });
        resetForm();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.title) errors.title = "Required";
        if (!values.description) errors.description = "Required";
        return errors;
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              className={
                errors.title && touched.title
                  ? "input-error form-control"
                  : "form-control"
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              as="textarea"
              className={
                errors.description && touched.description
                  ? "input-error form-control"
                  : "form-control"
              }
            />
          </div>

          <div className="form-group">
            <Field id="type" name="type" as="select" className="form-control">
              <option value="Normal">Normal</option>
              <option value="Reminder">Reminder</option>
              <option value="Important">Important</option>
            </Field>
          </div>

          <Field
            id="index"
            name="index"
            type="hidden"
            value={currentPostIt.index}
          />

          <Field
            id="inBoard"
            name="inBoard"
            type="hidden"
            value={currentPostIt.inBoard}
          />

          <button type="submit" className="btn btn-primary">
            Add Post-It
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PostItForm;
