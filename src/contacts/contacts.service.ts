import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './contacts.entity';
import { Repository } from 'typeorm';
import { ContactType } from './contactType.enum';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async findAll(): Promise<any> {
    return await this.contactRepository.find().then((result) => {
      // console.log(result);
      return result;
    });
  }
  findOne(): Promise<Contact> {
    return this.contactRepository.findOne();
  }
  async editOne(id: number, contact: Contact): Promise<any> {
    await this.contactRepository.update(id, contact);
  }
  async createOne(contact: Contact): Promise<any> {
    contact.contactType = ContactType.CUSTOMER;
    this.contactRepository.create(contact);
    await this.contactRepository.insert(contact);
  }
  async deleteOne(id: number): Promise<any> {
    await this.contactRepository.delete(id);
  }
}
