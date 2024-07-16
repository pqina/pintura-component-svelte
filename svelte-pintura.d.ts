import { SvelteComponent } from 'svelte';
import {
    PinturaEditorDefaultOptions,
    PinturaEditorModalOptions,
    PinturaDefaultImageReaderResult,
    PinturaDefaultImageWriterResult,
    PinturaReadState,
    PinturaWriteState,
    PinturaImageState,
    PinturaEditor as PinturaEditorInstance,
    Shape,
    Vector,
} from '@pqina/pintura';

declare module '@pqina/svelte-pintura' {
    class PinturaComponentEvents {
        init?: (e: CustomEvent<PinturaEditorInstance>) => void;
        loadstart?: () => void;
        loadabort?: (e: CustomEvent<PinturaReadState>) => void;
        loaderror?: (e: CustomEvent<PinturaReadState>) => void;
        loadprogress?: (e: CustomEvent<PinturaReadState>) => void;
        load?: (e: CustomEvent<PinturaDefaultImageReaderResult>) => void;
        processstart?: () => void;
        processabort?: (e: CustomEvent<PinturaWriteState>) => void;
        processerror?: (e: CustomEvent<PinturaWriteState>) => void;
        processprogress?: (e: CustomEvent<PinturaWriteState>) => void;
        process?: (e: CustomEvent<PinturaDefaultImageWriterResult>) => void;
        loadpreview?: (e: CustomEvent<ImageData | ImageBitmap>) => void;
        ready?: () => void;
        update?: (e: CustomEvent<PinturaImageState>) => void;
        undo?: (e: CustomEvent<number>) => void;
        redo?: (e: CustomEvent<number>) => void;
        revert?: () => void;
        writehistory?: () => void;
        close?: () => void;
        destroy?: () => void;
        addshape?: (e: CustomEvent<Shape>) => void;
        selectshape?: (e: CustomEvent<Shape>) => void;
        updateshape?: (e: CustomEvent<Shape>) => void;
        removeshape?: (e: CustomEvent<Shape>) => void;
        markuptap?: (e: CustomEvent<{ target?: Shape; position: Vector }>) => void;
        markupzoom?: (e: CustomEvent<number>) => void;
        markuppan?: (e: CustomEvent<Vector>) => void;
        zoom?: (e: CustomEvent<number>) => void;
        pan?: (e: CustomEvent<Vector>) => void;
        selectstyle?: (e: CustomEvent<{ [key: string]: unknown }>) => void;
        selectutil?: (e: CustomEvent<string>) => void;
        selectcontrol?: (e: CustomEvent<string>) => void;
        selectiondown?: (e: CustomEvent<string>) => void;
        selectionup?: (e: CustomEvent<string>) => void;
        selectionchange?: (e: CustomEvent<string>) => void;
    }

    class PinturaComponentModalEvents extends PinturaComponentEvents {
        show?: () => void;
        hide?: () => void;
    }

    export class PinturaEditor extends SvelteComponent<PinturaEditorDefaultOptions> {
        $$events_def: PinturaComponentEvents;
    }

    export class PinturaEditorModal extends SvelteComponent<
        PinturaEditorDefaultOptions & PinturaEditorModalOptions
    > {
        $$events_def: PinturaComponentModalEvents;
    }

    export class PinturaEditorOverlay extends SvelteComponent<PinturaEditorDefaultOptions> {
        $$events_def: PinturaComponentEvents;
    }
}
