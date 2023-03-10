// swiftlint:disable all
import Amplify
import Foundation

public struct User: Model {
  public let id: String
  public var first_name: String
  public var last_name: String
  public var email: String
  public var phone: String
  public var role: String
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      first_name: String,
      last_name: String,
      email: String,
      phone: String,
      role: String) {
    self.init(id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      role: role,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      first_name: String,
      last_name: String,
      email: String,
      phone: String,
      role: String,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.first_name = first_name
      self.last_name = last_name
      self.email = email
      self.phone = phone
      self.role = role
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}