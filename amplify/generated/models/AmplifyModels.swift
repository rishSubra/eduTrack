// swiftlint:disable all
import Amplify
import Foundation

// Contains the set of classes that conforms to the `Model` protocol. 

final public class AmplifyModels: AmplifyModelRegistration {
  public let version: String = "a2cfaa69d5dd3199bb4a586be8673a18"
  
  public func registerModels(registry: ModelRegistry.Type) {
    ModelRegistry.register(modelType: Post.self)
    ModelRegistry.register(modelType: Event.self)
    ModelRegistry.register(modelType: User.self)
  }
}