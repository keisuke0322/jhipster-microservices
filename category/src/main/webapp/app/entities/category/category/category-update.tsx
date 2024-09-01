import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { createEntity, getEntity, reset, updateEntity } from './category.reducer';

export const CategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const categoryEntity = useAppSelector(state => state.category.category.entity);
  const loading = useAppSelector(state => state.category.category.loading);
  const updating = useAppSelector(state => state.category.category.updating);
  const updateSuccess = useAppSelector(state => state.category.category.updateSuccess);

  const handleClose = () => {
    navigate('/category/category');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }

    const entity = {
      ...categoryEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...categoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="categoryApp.categoryCategory.home.createOrEditLabel" data-cy="CategoryCreateUpdateHeading">
            Categoryの作成または編集
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="category-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="category-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'このフィールドを入力してください。' },
                }}
              />
              <ValidatedField label="Description" id="category-description" name="description" data-cy="description" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/category/category" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">戻る</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; 保存
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CategoryUpdate;
