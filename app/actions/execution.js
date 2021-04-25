import uuid from 'uuid/v4'

export const EXECUTION_CONFIG_LOAD = 'EXECUTION_CONFIG_LOAD'
export const EXECUTION_CONFIG_LOAD_SUCCESS = 'EXECUTION_CONFIG_LOAD_SUCCESS'
export const EXECUTION_CONFIG_LOAD_ERROR = 'EXECUTION_CONFIG_LOAD_ERROR'
export const EXECUTION_CONFIG_SAVE = 'EXECUTION_CONFIG_SAVE'
export const EXECUTION_CONFIG_SAVE_SUCCESS = 'EXECUTION_CONFIG_SAVE_SUCCESS'
export const EXECUTION_CONFIG_SAVE_ERROR = 'EXECUTION_CONFIG_SAVE_ERROR'
export const EXECUTION_CONFIG_CLEAR = 'EXECUTION_CONFIG_CLEAR'
export const EXECUTION_CONFIG_CLEAR_SUCCESS = 'EXECUTION_CONFIG_CLEAR_SUCCESS'
export const EXECUTION_CONFIG_CLEAR_ERROR = 'EXECUTION_CONFIG_CLEAR_ERROR'

export const EXECUTION_PREPROCESS_DATASET = 'EXECUTION_PREPROCESS_DATASET'
export const EXECUTION_PREPROCESS_DATASET_SUCCESS = 'EXECUTION_PREPROCESS_DATASET_SUCCESS'
export const EXECUTION_PREPROCESS_DATASET_ERROR = 'EXECUTION_PREPROCESS_DATASET_ERROR'
export const EXECUTION_PREPROCESS_DATASET_SCHEDULED = 'EXECUTION_PREPROCESS_DATASET_SCHEDULED'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_SCHEDULED = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_SCHEDULED'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_STATUS = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_STATUS'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_RESULT = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_RESULT'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_NODELOG = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_NODELOG'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_CRASH = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_CRASH'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_CRASH_ERROR = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_CRASH_ERROR'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_LOG = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_LOG'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_LOG_ERROR = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_LOG_ERROR'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_FINISHED = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_FINISHED'
export const EXECUTION_PREPROCESS_DATASET_PROCESSING_ERROR = 'EXECUTION_PREPROCESS_DATASET_PROCESSING_ERROR'
export const EXECUTION_PREPROCESS_DATASET_FINISHED = 'EXECUTION_PREPROCESS_DATASET_FINISHED'
export const EXECUTION_PREPROCESS_DATASET_FETCHED = 'EXECUTION_PREPROCESS_DATASET_FETCHED'

export function preprocessDataset(execution, scheduler, dataset, pipeline, note=null) {
  // const execution = uuid()
  return {
    type: EXECUTION_PREPROCESS_DATASET,
    execution, scheduler, dataset, pipeline, note
  }
}
