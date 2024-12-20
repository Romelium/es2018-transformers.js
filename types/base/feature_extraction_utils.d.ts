/**
 * Helper function to validate audio inputs.
 * @param {any} audio The audio data.
 * @param {string} feature_extractor The name of the feature extractor.
 * @private
 */
export function validate_audio_inputs(audio: any, feature_extractor: string): void;
declare const FeatureExtractor_base: new () => {
    (...args: any[]): any;
    _call(...args: any[]): any;
};
/**
 * Base class for feature extractors.
 */
export class FeatureExtractor extends FeatureExtractor_base {
    /**
     * Instantiate one of the processor classes of the library from a pretrained model.
     *
     * The processor class to instantiate is selected based on the `image_processor_type` (or `feature_extractor_type`; legacy)
     * property of the config object (either passed as an argument or loaded from `pretrained_model_name_or_path` if possible)
     *
     * @param {string} pretrained_model_name_or_path The name or path of the pretrained model. Can be either:
     * - A string, the *model id* of a pretrained processor hosted inside a model repo on huggingface.co.
     *   Valid model ids can be located at the root-level, like `bert-base-uncased`, or namespaced under a
     *   user or organization name, like `dbmdz/bert-base-german-cased`.
     * - A path to a *directory* containing processor files, e.g., `./my_model_directory/`.
     * @param {import('../utils/hub.js').PretrainedOptions} options Additional options for loading the processor.
     *
     * @returns {Promise<FeatureExtractor>} A new instance of the Processor class.
     */
    static from_pretrained(pretrained_model_name_or_path: string, options: import("../utils/hub.js").PretrainedOptions): Promise<FeatureExtractor>;
    /**
     * Constructs a new FeatureExtractor instance.
     *
     * @param {Object} config The configuration for the feature extractor.
     */
    constructor(config: any);
    config: any;
}
export {};
//# sourceMappingURL=feature_extraction_utils.d.ts.map