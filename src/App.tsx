import React, { useCallback, useState } from 'react';
import EasyForm, { useForm } from '@ks/easy-form';
import { useFormConfig } from './form.config';
import { Task } from './apis';
import { useCreateTask } from './ddd/domain';
import './App.css';
import { message, Spin } from 'm-ui';

function App() {
  const [submiting, setSubmiting] = useState(false);
  const [form] = useForm<Task>();

  const createTask = useCreateTask();

  const handleSubmit = useCallback(() => {
    form.validateFields().then(() => {
      setSubmiting(true);

      createTask(form.getFieldsValue(), {
        // success
        onSuccess: (_response) => {
          message.success('创建成功');
        },

        // error
        onError: (_error) => {
          message.error('创建失败');
        },

        // finally
        onSettled: () => {
          setSubmiting(false);
        }
      });
    })
  }, [createTask, form]);
  const formProps = useFormConfig(handleSubmit);

  return (
    <Spin spinning={submiting}>
      <EasyForm
        style={{ width: 600, margin: '0 auto' }}
        form={form}
        onTouch={(touched) => {
          console.log('touch', touched);
        }}
        {...formProps}
      />
    </Spin>
  );
}

export default App;
