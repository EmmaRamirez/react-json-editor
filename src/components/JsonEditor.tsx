import * as React from 'react';

export interface JsonEditorProps {
    style: React.CSSProperties;
}

export interface JsonEditorState {

}

export class JsonEditor extends React.PureComponent<JsonEditorProps, JsonEditorState> {
    constructor(props:JsonEditorProps) {
        super(props);
    }

    public render() {
        return (
            <div className='react-json-editor'>


            </div>
        );
    }
}