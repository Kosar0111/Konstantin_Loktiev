import { Button, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { createPost as createPostAction } from '../../redux/modules/posts'

const CreatePost = (createPost) => {
    const onSubmit = (values) => {
        createPost()
    }
    return (
        <Form
            name="basic"
            autoComplete="off"
        >
            <Form.Item
                label="Title"
                name="title"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Body"
                name="body"
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default connect(
    null,
    {
        createPost: createPostAction,
    }
)(CreatePost);