// swiftlint:disable all
import Amplify
import Foundation

public struct Event: Model {
  public let id: String
  public var event_title: String
  public var event_type: String?
  public var start_time: Temporal.Time
  public var end_time: Temporal.Time
  public var description: String?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      event_title: String,
      event_type: String? = nil,
      start_time: Temporal.Time,
      end_time: Temporal.Time,
      description: String? = nil) {
    self.init(id: id,
      event_title: event_title,
      event_type: event_type,
      start_time: start_time,
      end_time: end_time,
      description: description,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      event_title: String,
      event_type: String? = nil,
      start_time: Temporal.Time,
      end_time: Temporal.Time,
      description: String? = nil,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.event_title = event_title
      self.event_type = event_type
      self.start_time = start_time
      self.end_time = end_time
      self.description = description
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}